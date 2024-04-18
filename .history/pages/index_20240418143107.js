import styles from "@/styles/Home.module.css";
import BarChart from "@/components/BarChart";
import HorizontalBarChart from "@/components/HorizontalBarChart"
import 


export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <BarChart/>
        <HorizontalBarChart/>

      </main>
    </>
  );
}
