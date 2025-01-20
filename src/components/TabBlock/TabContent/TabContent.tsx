const TabContent = ({ key, children }: { key?: number, children: React.ReactNode }) => {
    console.log(key);
    return (
        <>
            {key &&
                <div key={key}>
                    {children}
                </div>
            }
        </>

    )
}

export default TabContent;