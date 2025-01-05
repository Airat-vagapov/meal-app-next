const ContentTable = ({ data }: { data: any[] }) => {
    return (
        <>
            {data &&
                data.map((item, index) => {
                    return (
                        <div key={index}>
                            <div>{item.name}</div>
                            <div>{item.data}</div>
                        </div>
                    );
                })}
        </>
    );
};

export default ContentTable;
