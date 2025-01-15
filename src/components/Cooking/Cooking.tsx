// import SubTitle from '@/UI/SubTitle/SubTitle'
import SubTitle from './../../UI/SubTitle/SubTitle';
import ContentBlock from '@/UI/ContentBlock/ContentBlock'
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
            <ContentBlock>
                {data && data.map((item: CookingStep, index: number) => {
                    return (
                        <div key={index}>

                            {item.name === "Description" &&
                                <div>
                                    <SubTitle>{item.name}</SubTitle>
                                    <HtmlRenderer content={item.data}></HtmlRenderer>
                                </div>
                            }

                            {item.name === 'Steps' &&
                                <div>
                                    <CookingSteps steps={item.data} />
                                </div>
                            }

                        </div>
                    )

                })}
            </ContentBlock>
        </>
    )
}

export default Cooking;