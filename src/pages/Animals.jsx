import {
  collection,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { db } from "../config/firebase";
import { Box, CircularProgress, Container } from "@mui/material";

const animalRef = collection(db, "animals");

const getAnimals = async () => {
  const querySnapshot = await getDocs(animalRef);

  return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

const setAnimal = async (data) => {
  await setDoc(doc(animalRef), data);
};

async function deleteAnimal(documentId) {
  console.log(documentId);
  await deleteDoc(doc(db, "animals", documentId));
}

export default function Animals() {
  const { data: animals, isLoading } = useQuery({
    queryKey: ["animals"],
    queryFn: getAnimals,
  });

  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const { mutate, ...rest } = useMutation({
    mutationKey: "animals",
    mutationFn: setAnimal,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["animals"] });
    },
  });

  const { mutate: mutateDelete, isPending: isPendingDelete } = useMutation({
    mutationKey: "animals",
    mutationFn: deleteAnimal,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["animals"] });
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          )}
          control={control}
          name="name"
          placeholder="test"
        />

        <input type="submit" />
      </form>
      {isPendingDelete && <CircularProgress />}
      {animals.map((animal) => (
        <div key={animal.id}>
          <h3>
            {animal.name}{" "}
            <button onClick={() => mutateDelete(animal.id)}>Delete</button>
          </h3>
        </div>
      ))}
    </Box>
  );
}
