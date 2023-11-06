
// "use client"
import { getAlldata, getSingleData } from '../utils';
export default function Home() {


  const data = getAlldata();
  const singleData = getSingleData('web-design')
  console.log(singleData)

  return (
    <div>
      Hello
    </div>
  );
}
