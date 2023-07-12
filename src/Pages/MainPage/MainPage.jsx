import { useSelector } from 'react-redux';
import { MainPageText } from './MainPage.styled';

const MainPage = () => {
  const language = useSelector(state => state.language);
  console.log(language);
  return (
    <>
      {language === 'en' ? (
        <div>
          {
            <MainPageText>
              In connection with military aggressions on the territory of
              Ukraine, hundreds of thousands of civilians in Ukrainian cities
              were cut off from the benefits of peaceful life. Charitable
              organization "Ziele der Zukunft e.V." set itself the goal of
              providing support and providing food, medicine and energy to tens
              of thousands of civilians in the front-line cities and villages of
              the Kharkiv region in Ukraine (Volchansk, Izyum, Balakleya,
              Kupyansk, Kharkiv and other settlements) in the hope of reducing
              the existing difficulties and thus support the inhabitants of the
              destroyed cities in this difficult time!
            </MainPageText>
          }
        </div>
      ) : language === 'ua' ? (
        <div>
          {
            <MainPageText>
              Благодійна організація "Ziele der Zukunft e.V." поставила собі за
              мету надання підтримки та забезпечення продуктами харчування,
              медикаментами та енергоресурсами десятки тисяч мирних жителів у
              прифронтових містах та селах Харківської області в Україні
              (Вовчанськ, Ізюм, Балаклія, Куп'янськ, Харків та інших населених
              пунктах) в надії зменшити існуючі труднощі і таким чином
              підтримати мешканців зруйнованих міст у цей скрутний час!
            </MainPageText>
          }
        </div>
      ) : (
        <div>
          {
            <MainPageText>
              Im Zusammenhang mit militärischen Aggressionen auf dem Territorium
              der Ukraine wurden Hunderttausende Zivilisten in ukrainischen
              Städten von den Vorteilen eines friedlichen Lebens abgeschnitten.
              Gemeinnütziger Verein "Ziele der Zukunft e.V." hat sich zum Ziel
              gesetzt, Zehntausende von Zivilisten in den Frontstädten und
              Dörfern der Region Charkiw in der Ukraine (Woltschansk, Izyum,
              Balakleya, Kupyansk, Charkiw und andere Siedlungen) zu
              unterstützen und mit Nahrung, Medizin und Energie zu versorgen
              Hoffnung, die bestehenden Schwierigkeiten zu verringern und damit
              die Bewohner der zerstörten Städte in dieser schwierigen Zeit zu
              unterstützen!
            </MainPageText>
          }
        </div>
      )}
    </>
  );
};

export default MainPage;
