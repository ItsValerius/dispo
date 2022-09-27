import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Nav from "../../../components/Nav";

const Netz = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Nav />
      <div>Netz Id: {id}</div>
      <Link href={"/netze"}>Netze</Link>
    </>
  );
};

export default Netz;
