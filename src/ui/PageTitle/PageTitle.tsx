import parse from 'html-react-parser'
import styles from './PageTitle.module.sass';


type PageTitleProps = {
    title: string;
    desc?: any;
}

export const HtmlRenderer: React.FC<{ content: string }> = ({ content }) => {
    let result
    if (content) {
        result = parse(content)
    }
    return (
        <div>
            {result}
        </div>
    )
}

const PageTitle: React.FC<PageTitleProps> = ({ title, desc }) => {
    return (
        <div>
            <h1 className={styles.title}>{title}</h1>
            {desc &&
                <div className={styles.desc}>
                    <HtmlRenderer content={desc}></HtmlRenderer>
                </div>
            }

        </div>
    )
}

export default PageTitle;