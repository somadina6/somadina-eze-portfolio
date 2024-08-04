import { client } from "./client";
import * as queries from "../queries/queries";
import {
  GetHeroQueryResult,
  GetProjectsDataQueryResult,
  GetResumeUrlQueryResult,
} from "@/sanity.types";

export async function getHeroData() {
  try {
    const result = await client.fetch<GetHeroQueryResult>(
      queries.getHeroQuery,
      {},
      { cache: "no-cache" }
    );
    if (!result) throw new Error("Failed to get Hero section");
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getResumeData() {
  try {
    const res = await fetch("/api/sanity/resume");

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data: GetResumeUrlQueryResult = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getProjectsData() {
  try {
    const res = await client.fetch<GetProjectsDataQueryResult>(
      queries.getProjectsDataQuery,
      {},
      { cache: "no-cache" }
    );

    return res;
  } catch (error) {
    console.log(error);
  }
}
