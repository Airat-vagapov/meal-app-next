const TabContent = ({ key, children }: { key?: number, children: React.ReactNode }) => {
    return (
        <div key={key}>
            {children}
        </div>
    )
}

export default TabContent;