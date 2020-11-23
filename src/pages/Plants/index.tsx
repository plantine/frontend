import React, { FC } from "react";
import { style } from "typestyle";
import { useQuery, gql } from "@apollo/client";
import { Plant, PlantsData } from "../../interfaces";

import { CardContainer } from "../../components/CardContainer";
import { PlantCard } from "../../components/PlantCard";
import { Container } from "../../components/Container";

type Props = {};

const plantsClass = style({});

const GET_PLANTS = gql`
  query {
    plants {
      id
      name
      description
      lightRequired
      wateringRequired
      icon
    }
  }
`;

export const Plants: FC<Props> = () => {
  const { loading, data } = useQuery<PlantsData>(GET_PLANTS);

  return (
    <div className={plantsClass}>
      <Container>
        {loading ? (
          "Loading"
        ) : (
          <CardContainer>
            {data &&
              data.plants.map((plant: Plant) => (
                <PlantCard key={plant.id} {...plant} />
              ))}
          </CardContainer>
        )}
      </Container>
    </div>
  );
};
