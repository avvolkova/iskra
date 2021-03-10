import React from 'react';
import worms from '../../models/card';
import ToDo from '../ToDo/ToDo';
import InProgress from "../InProgress/InProgress";
import Done from '../Done/Done';
import {Box} from "@material-ui/core"

export default function Main() {
  return (
    <>
    <Box display="flex" justifyContent="space-around">
      <ToDo worms={worms} />
      <InProgress worms={worms} />
      <Done worms={worms} />
    </Box>
    </>
  );
}
