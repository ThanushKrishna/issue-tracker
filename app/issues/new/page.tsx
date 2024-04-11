'use client';
import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";
import { Metadata } from "next";

const IssueForm = dynamic(
  () => import("../_components/IssueForm"), 
  {
    ssr: false,
    loading: () => <IssueFormSkeleton />
  }
  );

const NewIssuePage = async () => {


  return (
    <IssueForm />  
    )
    
}



export default NewIssuePage