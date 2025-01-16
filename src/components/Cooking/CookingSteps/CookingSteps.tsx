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
