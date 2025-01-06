import CookingSteps from '@/components/Cooking/CookingSteps/CookingSteps'
import { HtmlRenderer } from '@/UI/PageTitle/PageTitle';

type CookingStep = {
    name: string,
    data: any

}

const Cooking = ({ data }: { data: CookingStep[] }) => {
    console.log(data);
    return (
        <>
            {data && data.map((item: CookingStep, index: number) => {
                return (
                    < div key={index}>
                        {item.name === "Description" &&
                            <div>
                                <p>{item.name}</p>
                                <HtmlRenderer content={item.data}></HtmlRenderer>
                            </div>
                        }

                        {item.name === 'Steps' &&
                            <CookingSteps steps={item.data} />
                        }
                    </div>
                )

            })}

        </>
    )
}

export default Cooking;