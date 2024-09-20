"use server";

import { db } from "@/db";

export async function getPolicies() {
  try {
    const policies = await db.insurance_policies.findMany();
    return policies; 
  } catch (error) {
    return { error: "Error fetching policies" };
  }
}