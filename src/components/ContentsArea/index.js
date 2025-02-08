import styles from './ContentsArea.module.css';
import ContentBanner from "../../components/ContentBanner";
import themes from '../../json/themes.json';
import Input from '../Input';
import { useState } from 'react';
import SearchNotFound from '../SearchNotFound';

const ContentsArea = () => {

    const [searchedThemes, setSearchedThemes] = useState(themes);
    return (
        <section className={styles.contentsArea}>
            <h2>Conteúdos disponíveis</h2>
            <p>Aqui você encontra os mais diversos temas que temos disponíveis!</p>
            <Input
                placeholder='Oque você deseja ver hoje?'
                onChange={event => {
                    const typedText = event.target.value;
                    const result = themes.filter(theme => theme.theme_title.toLowerCase().includes(typedText.toLowerCase()))
                    setSearchedThemes(result);
                    console.log(searchedThemes)
                }}
            />
            {searchedThemes.length === 0 ? <SearchNotFound /> : ''}

            <div className={styles.contentContainer}>
                {searchedThemes.map(theme => (
                    <ContentBanner
                        key={theme.id}
                        linkTo='/article'
                        locked={theme.locked}
                        title={theme.theme_title}
                        subtitle={theme.subtitle}
                        background={`/assets/themeBackground/${theme.image_name}`}
                    />
                ))}
            </div>
        </section>
    )
}

export default ContentsArea;