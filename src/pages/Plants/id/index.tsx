import React, { FC, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { style } from "typestyle";
import { useParams } from "react-router-dom";
import { PlantData, PlantVars } from "../../../interfaces";

import { PlantIcon } from "../../../components/PlantIcon";

type Props = {};

const plantDetailClass = style({});

const GET_PLANT = gql`
  query GetPlant($id: ID!) {
    plant(where: { id: $id }) {
      id
      name
      description
      lightRequired
      wateringRequired
      icon
    }
  }
`;

interface TParams {
  id: string;
}

export const PlantDetail: FC<Props> = () => {
  const { id } = useParams<TParams>();
  console.log(`id: ${id}`);

  const { loading, data } = useQuery<PlantData, PlantVars>(GET_PLANT, {
    variables: { id },
  });

  return (
    <div className={plantDetailClass}>
      Plant Detail
      {loading ? (
        "Loading"
      ) : (
        <div>
          <PlantIcon icon={data?.plant.icon || "cactus"} />
          <p>{data?.plant.id}</p>
          <p>{data?.plant.name}</p>
        </div>
      )}
    </div>
  );
};
