import SubTitle from '@/ui/SubTitle/SubTitle'
import ContentBlock from '@/ui/ContentBlock/ContentBlock'
import CookingSteps from '@/components/Cooking/CookingSteps/CookingSteps'
import { HtmlRenderer } from '@/ui/PageTitle/PageTitle';
import InfoBlock from '@/components/InfoBlock/InfoBlock';

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
                            {item.name === "Description" && (item.data != null) &&
                                <div>
                                    <SubTitle>{item.name}</SubTitle>
                                    <HtmlRenderer content={item.data}></HtmlRenderer>
                                </div>
                            }

                            {item.name === 'Steps' && (item.data != null || item.data.length > 0) &&
                                <div>
                                    <CookingSteps steps={item.data} />
                                </div>
                            }

                            {(item.data == null || (Array.isArray(item.data) && item.data.length < 0)) && <InfoBlock title={'Sorry'} text={'We have no information on this dish'} /> }
                        </div>
                    )

                })}
            </ContentBlock>
        </>
    )
}

export default Cooking;