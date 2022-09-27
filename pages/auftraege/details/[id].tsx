import React from 'react'
import { useRouter } from 'next/router';
import Nav from '../../../components/Nav';
import Link from "next/link"

const Auftrag = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Nav />
      <div>Netz Id: {id}</div>
      <Link href={"/auftraege"}>Netze</Link>
    </>
  );
}

export default Auftrag