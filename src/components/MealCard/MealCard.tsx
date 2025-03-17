import TextLink from "@/ui/TextLink/TextLink";

import styles from "./MealCard.module.sass";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";
import Button from "@/ui/Button/Button";
import Image from "next/image";
import { useRef } from "react";

interface IMealCard {
    meal: any;
    key?: string | number;
    color?: string;
    column?: boolean;
}

const MealCard: React.FC<IMealCard> = ({ key, meal, color, column }) => {
    const imageRef = useRef<HTMLImageElement>(null)

    const noImageHandler = () => {
        imageRef.current.src = '/error.jpeg'
    }

    // Media Queries
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
    return (
        <>
            {meal && (
                <div key={key}
                    className={classNames(styles.mealCard,
                        {
                            [styles[`mealCard__${color}`]]: color,
                            [styles[`mealCard--column`]]: column,
                        })}
                >
                    <a href={`/meals/${meal?.id}`}>
                        {/* <Image src={`https://img.spoonacular.com/recipes/${meal?.id}-312x231.jpg`} width={312} height={231} alt={meal?.title}></Image> */}
                        <img
                            src={`https://img.spoonacular.com/recipes/${meal?.id}-312x231.jpg`}
                            alt={meal?.title}
                            onError={noImageHandler}
                            ref={imageRef}
                        />
                        {/* <img src={meal?.image} alt={meal?.title} /> */}
                        {/* <img src={`https://img.spoonacular.com/recipes/${meal?.id}-312x231.jpg`} alt={meal?.title} /> */}
                    </a>


                    <div className={styles.mealCardContent}>
                        <a href={`/meals/${meal?.id}`}>
                            <p className={styles.mealTitle}>{meal?.title}</p>
                        </a>
                        {/* {dataArr.length && <TagGroup data={dataArr} />} */}

                        <div className={styles.mealLink}>
                            {isMobile ? <Button link={`/meals/${meal?.id}`}>Show more</Button> : <TextLink
                                size={16}
                                text="Show more"
                                link={`/meals/${meal?.id}`}
                            />}

                        </div>
                    </div>


                </div>
            )}
        </>
    );
};
export default MealCard;
