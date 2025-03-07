import { Title } from 'shared/ui/Title/Title';
import { Container } from 'shared/ui/Container/Container';
import { MainSlider } from 'features/MainSlider';
import cls from './MainPage.module.scss';

const MainPage = () => {
    return (
        <Container>
            <div className={ cls.wrapper }>
                <Title
                    className={ cls.title }
                    variant={ 'h1' }
                >
                    Исторические даты
                </Title>

                <MainSlider/>
            </div>
        </Container>
    )
};

export default MainPage;
