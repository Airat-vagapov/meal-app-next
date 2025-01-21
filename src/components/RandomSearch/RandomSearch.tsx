import Input from "@/ui/Input/Input";
import { useFormik } from "formik";
import { useGetRandomMealsMutation } from "@/services/mealApi";
import Button from "@/ui/Button/Button";

import styles from "./RandomSearch.module.sass";

const RandomSearch = ({ setMealData }: { setMealData: (value: any) => void }) => {
    // API
    const [getRandomMealsMutation, { isLoading, isError, error }] =
        useGetRandomMealsMutation();

    // Formik
    const randomSearchForm = useFormik({
        initialValues: {
            randomMealsNumber: "",
        },
        onSubmit: async (values) => {
            try {
                const data = await getRandomMealsMutation(
                    values.randomMealsNumber
                ).unwrap();
                console.log(data);
                setMealData(data.recipes)
            } catch (err) {
                console.error(err);
            }
        },
    });

    return (
        <div>
            <form
                className={styles.form}
                onSubmit={randomSearchForm.handleSubmit}
            >
                <Input
                    name="randomMealsNumber"
                    id="randomMealsNumber"
                    placeholder="Set number"
                    onChange={randomSearchForm.handleChange}
                />
                <Button type={"submit"}>Get random dishes</Button>
            </form>
        </div>
    );
};

export default RandomSearch;
