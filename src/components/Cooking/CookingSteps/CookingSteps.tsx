import List from '@/UI/List/List'
import Step from '@/components/Step/Step'
import StepList from '@/components/Step/StepList/StepList'

const CookingSteps = ({ steps }: { steps: any[] }) => {
    return (
        <>
            {steps && steps.map((item, index) => {
                return (
                    <div key={index}>
                        <StepList data={item}></StepList>
                    </div>
                )
            })}
        </>
    )
}
export default CookingSteps;
