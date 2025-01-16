import List from '@/ui/List/List'
import Step from '@/components/Step/Step'

const StepList = ({ data }: { data: any }) => {
    console.log(data)
    return (
        <List>
            {data.steps && data.steps.map((item: any, index: number) => {
                return (
                    <div key={index}>
                        <Step step={item}></Step>
                    </div>
                )
            })}
        </List>
    )

}

export default StepList;