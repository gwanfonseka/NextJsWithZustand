'use client';

import Link from "next/link";
import styles from "./styles.module.css";
import MealsGrid from "@/components/MealsGrid/MealsGrid";
import { useMealsStore } from "@/lib/stores/mealsStore";
import { useEffect } from "react";

const Meals = () => {
    const { meals, initializeMeals } = useMealsStore();

    useEffect(() => {
        initializeMeals();
    }, []);

    return (
        <>
            <header className={styles.header}>
                <h1>Delicious meals, created {' '}
                    <span className={styles.highlight}>by you</span>
                </h1>
                <p>Choose your favorite recipe and cook it yourself. It is easy and fun.</p>
                <p className={styles.cta}>
                    <Link href="/meals/share">Share your favorite recipe</Link>
                </p>
            </header>
            <main className={styles.main}>
                {meals.length !== 0 && (
                    <MealsGrid meals={meals} />
                )}
            </main>
        </>
    )
}

export default Meals;