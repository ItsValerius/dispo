import { useRouter } from 'next/router'
import React from 'react'
import Nav from '../../../components/Nav'
import Link from 'next/link'
const Screen = () => {
  const router = useRouter()
  const {id} = router.query
  return (
    <>
      <Nav />
      <div>Screen Id: {id}</div>
      <Link href={"/netze"}>Netze</Link>
    </>
  );
}

export default Screen