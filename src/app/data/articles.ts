import { Article } from '../models/article.model';

export const ARTICLES: Article[] = [
  {
    id: "1",
    publicationDate: "9 listopada 2025 r.",
    name: "Kompensacja mocy biernej - jak zmniejszyć rachunki za moc bierną?",
    image: "kompensacja-mocy-biernej-jak-zmniejszyc-rachunki.png",
    path: "kompensacja-mocy-biernej-jak-zmniejszyc-rachunki",
    lead:
      "Czy na Twojej fakturze za prąd pojawia się pozycja „opłata za energię bierna”? Nie jesteś sam – wiele firm w Warszawie i całej Polsce płaci setki złotych miesięcznie opłaty, której można uniknąć. W tym artykule wyjaśniamy, czym jest moc bierna, dlaczego generuje dodatkowe koszty i co możesz zrobić, by zmniejszyć rachunki.",
    summaryList: [
      {
        id: 1,
        name:
          "moc bierna to energia, która krąży między urządzeniem a siecią, ale nie wykonuje użytecznej pracy",
      },
      {
        id: 2,
        name:
          "zakład energetyczny nalicza opłaty, gdy współczynnik mocy (tzw. cosφ) spada poniżej dopuszczalnego poziomu",
      },
      {
        id: 3,
        name:
          "szukaj pozycji „energia bierna pojemnościowa” lub „energia bierna indukcyjna” na fakturze, aby zobaczyć naliczone opłaty",
      },
      {
        id: 4,
        name:
          "kompensator mocy biernej może zmniejszyć opłaty za moc bierną niemal do zera",
      },
      {
        id: 5,
        name:
          "koszt kompensatora mocy biernej wynosi zwykle od kilku - kilkunastu tys. zł",
      },
      {
        id: 6,
        name:
          "wykonaj z nami darmowy audyt, dzięki któremu dopasujemy idealne urządzenie dla Ciebie",
      },
    ],
    contentList: [
      {
        id: 1,
        name: "Czym jest moc bierna – proste wyjaśnienie",
        link: "#czym-jest-moc-bierna-proste-wyjasnienie",
      },
      {
        id: 2,
        name: "Skąd biorą się opłaty za moc bierną na fakturze?",
        link: "#skad-biora-sie-oplaty-za-moc-bierna-na-fakturze",
      },
      {
        id: 3,
        name: "Jak sprawdzić, czy Twoja firma płaci za moc bierną?",
        link: "#jak-sprawdzic-czy-twoja-firma-placi-za-moc-bierna",
      },
      {
        id: 4,
        name: "Jak uniknąć opłat za energię bierną?",
        link: "#jak-uniknac-oplat-za-energie-bierna",
      },
      {
        id: 5,
        name: "Ile kosztuje montaż kompensatora mocy biernej?",
        link: "#ile-kosztuje-montaz-kompensatora-mocy-biernej",
      },
      {
        id: 6,
        name:
          "Najczęstsze błędy przy kompensacji mocy biernej i jak ich uniknąć",
        link:
          "#najczestsze-bledy-przy-kompensacji-mocy-biernej-i-jak-ich-uniknac",
      },
      {
        id: 7,
        name:
          "Kompensacja mocy biernej w Warszawie – lokalne realizacje i korzyści",
        link:
          "#kompensacja-mocy-biernej-w-warszawie-lokalne-realizacje-i-korzysci",
      },
      {
        id: 8,
        name: "Zamawiam darmowy audyt",
        link: "#zamawiam-darmowy-audyt",
      },
    ],
    articleStructure: [
      {
        id: 1,
        subHeading: "Czym jest moc bierna – proste wyjaśnienie",
        paragraph:
          "Moc bierna to energia, która krąży między urządzeniem a siecią, ale nie wykonuje użytecznej pracy. Występuje wszędzie tam, gdzie są silniki, transformatory, klimatyzatory czy urządzenia z dużymi cewkami lub kondensatorami. Dla uproszczenia – można ją porównać do „energii w obiegu”: nie napędza maszyn, ale zajmuje miejsce w sieci, przez co operatorzy muszą ją kompensować i naliczają za nią opłaty.",
        imageLarge: "/oszczednosc.png",
        imageSm: "/oszczednosc.png",
        slug: "czym-jest-moc-bierna-proste-wyjasnienie"
      },
      {
        id: 2,
        subHeading: "Skąd biorą się opłaty za moc bierna na fakturze?",
        paragraph:
          "Zakład energetyczny nalicza opłaty, gdy współczynnik mocy (tzw. cosφ) spada poniżej dopuszczalnego poziomu – najczęściej 0,9. W praktyce oznacza to, że Twoje urządzenia „zaciągają” z sieci więcej mocy biernej niż powinny. Im więcej takich urządzeń pracuje jednocześnie (np. klimatyzacja, windy, sprężarki), tym większe są straty i opłaty.",
        imageLarge: "",
        imageSm: "",
        slug: "skad-biora-sie-oplaty-za-moc-bierna-na-fakturze"
      },
      {
        id: 3,
        subHeading: "Jak sprawdzić, czy Twoja firma płaci za moc bierną?",
        paragraph:
          "Najprostszy sposób to spojrzeć w fakturę – szukaj pozycji „energia bierna pojemnościowa” lub „energia bierna indukcyjna”. Jeśli takie wartości są większe od zera, Twoja firma ponosi dodatkowe koszty. Możesz też zlecić darmowy audyt – w ciągu jednego dnia da się określić, czy kompensacja mocy biernej przyniesie oszczędność.",
        imageLarge: "",
        imageSm: "",
        slug: "jak-sprawdzic-czy-twoja-firma-placi-za-moc-bierna"
      },
      {
        id: 4,
        subHeading: "Jak uniknąć opłat za energię bierną?",
        paragraph:
          "Najskuteczniejszym rozwiązaniem jest kompensacja mocy biernej – czyli instalacja urządzenia, które „wyrównuje” przepływ energii i eliminuje opłaty. Takie urządzenie nazywa się kompensatorem mocy biernej i może działać automatycznie – dopasowując się do obciążenia w czasie rzeczywistym. W praktyce: dobrze dobrany kompensator powinien obniżyć opłaty za moc bierną niemal do zera, co sprawia, że koszt montażu zwraca się zwykle w kilka miesięcy.",
        imageLarge: "/faktura.jpg",
        imageSm: "/faktura.jpg",
        slug: "jak-uniknac-oplat-za-energie-bierna"
      },
      {
        id: 5,
        subHeading: "Ile kosztuje montaż kompensatora mocy biernej?",
        paragraph:
          "Ceny kompensatorów zaczynają się od kilku tysięcy dla małych instalacji i mogą sięgać 20–30 tys. zł przy dużych zakładach przemysłowych. Na koszt wpływa: moc urządzenia (kvar), typ (z dławikami lub bez), jakość komponentów i system sterowania, montaż i konfiguracja.",
        imageLarge: "",
        imageSm: "",
        slug: "ile-kosztuje-montaz-kompensatora-mocy-biernej"
      },
      {
        id: 6,
        subHeading:
          "Najczęstsze błędy przy kompensacji mocy biernej i jak ich uniknąć",
        paragraph:
          "Jednym z najczęstszych błędów jest zakup kompensatora o zbyt małej lub zbyt dużej mocy. Zbyt słabe urządzenie nie wyeliminuje wszystkich opłat, a zbyt mocne może powodować nadkompensację i dodatkowe straty. Dlatego przed montażem zawsze warto przeprowadzić pomiar współczynnika mocy i dobrać urządzenie dokładnie do charakteru obciążenia. Każda instalacja elektryczna pracuje inaczej. Pominięcie tej analizy sprawia, że kompensator nie działa skutecznie lub szybciej się zużywa. Profesjonalny audyt przed doborem urządzenia eliminuje ten problem.",
        imageLarge: "",
        imageSm: "",
        slug: "najczestsze-bledy-przy-kompensacji-mocy-biernej-i-jak-ich-uniknac"
      },
      {
        id: 7,
        subHeading:
          "Kompensacja mocy biernej w Warszawie – lokalne realizacje i korzyści",
        paragraph:
          "Firma z Warszawy (branża przemysłowa) płaciła miesięcznie ponad 800 zł opłat za energię bierną. Po zainstalowaniu kompensatora koszt spadł do zera już w pierwszym miesiącu. 💡 Dzięki temu zwrot inwestycji nastąpił po 4 miesiącach, a firma zyskała znaczną oszczędność.",
        imageLarge: "/komp-lind.jpg",
        imageSm: "/komp-lind-sm.jpg",
        slug: "kompensacja-mocy-biernej-w-warszawie-lokalne-realizacje-i-korzysci"
      },
      {
        id: 8,
        subHeading: "Zamawiam darmowy audyt",
        paragraph:
          "Jeśli chcesz sprawdzić, czy Twoja firma też płaci za moc bierną – wyślij nam faktury za energię z ostatnich 6 miesięcy. Wykonamy bezpłatną analizę i pokażemy, ile możesz zaoszczędzić. Zadzwoń: 790 270 070 lub wyślij email: biuro@montroe.com.",
        imageLarge: "",
        imageSm: "",
        slug: "zamawiam-darmowy-audyt"
      },
    ],
  },
  {
    "id": "2",
    "publicationDate": "9 listopada 2025 r.",
    "name": "Modernizacja instalacji elektrycznej Warszawa – kiedy warto i ile to kosztuje?",
    "image": "modernizacja.png",
    "path": "modernizacja-instalacji-elektrycznej-warszawa",
    "lead": "Twoja instalacja elektryczna ma ponad 20 lat? W mieszkaniu często wybija bezpieczniki, a gniazdka iskrzą przy podłączaniu urządzeń? To sygnały, że instalacja wymaga modernizacji. W Warszawie stare instalacje są jedną z najczęstszych przyczyn awarii i pożarów w budynkach mieszkalnych. Wyjaśniamy, kiedy modernizacja jest konieczna, jak wygląda krok po kroku oraz ile kosztuje.",
    "summaryList": [
      {
        "id": 1,
        "name": "stare instalacje (aluminiowe) są niewydolne i stanowią ryzyko pożaru"
      },
      {
        "id": 2,
        "name": "modernizacja pozwala podłączyć nowe urządzenia o dużej mocy, np. płytę indukcyjną"
      },
      {
        "id": 3,
        "name": "wymiana instalacji elektrycznej podnosi wartość nieruchomości"
      },
      {
        "id": 4,
        "name": "koszt modernizacji w mieszkaniu w Warszawie zaczyna się od 6–12 tys. zł"
      },
      {
        "id": 5,
        "name": "wymagana jest dokumentacja powykonawcza i pomiary elektryczne"
      },
      {
        "id": 6,
        "name": "oferujemy darmowe oględziny instalacji i wycenę modernizacji"
      }
    ],
    "contentList": [
      {
        "id": 1,
        "name": "Kiedy instalacja elektryczna wymaga modernizacji?",
        "link": "#kiedy-instalacja-elektryczna-wymaga-modernizacji"
      },
      {
        "id": 2,
        "name": "Najczęstsze zagrożenia związane ze starą instalacją",
        "link": "#najczestsze-zagrozenia-zwiazane-ze-stara-instalacja"
      },
      {
        "id": 3,
        "name": "Jak przebiega modernizacja instalacji elektrycznej?",
        "link": "#jak-przebiega-modernizacja-instalacji-elektrycznej"
      },
      {
        "id": 4,
        "name": "Ile kosztuje modernizacja instalacji w Warszawie?",
        "link": "#ile-kosztuje-modernizacja-instalacji-w-warszawie"
      },
      {
        "id": 5,
        "name": "Modernizacja w mieszkaniu vs. modernizacja w domu jednorodzinnym",
        "link": "#mieszkanie-vs-dom-modernizacja"
      },
      {
        "id": 6,
        "name": "Najczęstsze błędy podczas wymiany instalacji",
        "link": "#najczestsze-bledy-podczas-wymiany-instalacji"
      },
      {
        "id": 7,
        "name": "Modernizacja instalacji elektrycznej w Warszawie – przykłady realizacji",
        "link": "#modernizacja-instalacji-elektrycznej-warszawa-realizacje"
      },
      {
        "id": 8,
        "name": "Umów darmowe oględziny instalacji",
        "link": "#umow-darmowe-ogledziny"
      }
    ],
    "articleStructure": [
      {
        "id": 1,
        "subHeading": "Kiedy instalacja elektryczna wymaga modernizacji?",
        "paragraph": "Instalacje starsze niż 20–30 lat – szczególnie te wykonane z przewodów aluminiowych – nie są przystosowane do współczesnych obciążeń. W latach 80. i 90. przeciętne gospodarstwo domowe pobierało nieporównywalnie mniej mocy. Dziś standardem są: płyta indukcyjna, zmywarka, suszarka bębnowa, ogrzewanie elektryczne czy klimatyzacja. Jeśli instalacja nie nadąża za zapotrzebowaniem lub często wybija zabezpieczenia, to praktycznie pewne, że wymaga wymiany.",
        "imageLarge": "/modernizacja.png",
        "imageSm": "/modernizacja.png",
        "slug": "kiedy-instalacja-elektryczna-wymaga-modernizacji"
      },
      {
        "id": 2,
        "subHeading": "Najczęstsze zagrożenia związane ze starą instalacją",
        "paragraph": "Stara instalacja to nie tylko niewygoda, ale przede wszystkim zagrożenie. Najpoważniejsze ryzyka to: przegrzewanie przewodów aluminiowych, iskrzenie w gniazdach, brak przewodu ochronnego (PE), przeciążenia podczas pracy kilku urządzeń naraz oraz ryzyko pożaru. Tego typu problemy wciąż są częstą przyczyną interwencji straży pożarnej w Warszawie.",
        "imageLarge": "",
        "imageSm": "",
        "slug": "najczestsze-zagrozenia-zwiazane-ze-stara-instalacja"
      },
      {
        "id": 3,
        "subHeading": "Jak przebiega modernizacja instalacji elektrycznej?",
        "paragraph": "Proces modernizacji przebiega w kilku etapach: 1) wstępne oględziny i pomiary, 2) przygotowanie projektu i rozmieszczenia gniazd, 3) kucie ścian i prowadzenie nowych przewodów, 4) montaż rozdzielnicy oraz zabezpieczeń różnicowoprądowych, 5) montaż gniazd i osprzętu, 6) pomiary końcowe i dokumentacja. W mieszkaniu modernizacja trwa zwykle 2–5 dni, a w domu – 5–10 dni.",
        "imageLarge": "",
        "imageSm": "",
        "slug": "jak-przebiega-modernizacja-instalacji-elektrycznej"
      },
      {
        "id": 4,
        "subHeading": "Ile kosztuje modernizacja instalacji w Warszawie?",
        "paragraph": "Cena zależy od metrażu, liczby obwodów i standardu wykończenia. W Warszawie wymiana instalacji w mieszkaniu 40–60 m² to zazwyczaj 6–12 tys. zł. W większych mieszkaniach lub domach koszty mogą sięgać 15–30 tys. zł. Na cenę wpływa także konieczność wykonania bruzdowania, montażu nowych zabezpieczeń oraz liczba punktów elektrycznych.",
        "imageLarge": "",
        "imageSm": "",
        "slug": "ile-kosztuje-modernizacja-instalacji-w-warszawie"
      },
      {
        "id": 5,
        "subHeading": "Modernizacja w mieszkaniu vs. modernizacja w domu jednorodzinnym",
        "paragraph": "W mieszkaniu zakres prac jest zwykle prostszy, ale wymaga uzgodnień z administracją budynku oraz dopasowania do istniejącej instalacji w pionach. W domach jednorodzinnych prace są bardziej rozbudowane – często obejmują także wymianę przyłącza, rozdzielnicy głównej i doprowadzenie zasilania do pomieszczeń gospodarczych, garażu czy ogrodu.",
        "imageLarge": "",
        "imageSm": "",
        "slug": "mieszkanie-vs-dom-modernizacja"
      },
      {
        "id": 6,
        "subHeading": "Najczęstsze błędy podczas wymiany instalacji",
        "paragraph": "Najczęstsze błędy to: zbyt mała liczba obwodów, brak osobnego obwodu dla indukcji, brak RCD, zbyt mała przekrój przewodów, pozostawienie części starej instalacji aluminiowej, montaż rozdzielnicy bez certyfikowanych komponentów lub brak pomiarów powykonawczych. Każdy z tych błędów może kosztować później wielokrotnie więcej niż oszczędność na etapie prac.",
        "imageLarge": "",
        "imageSm": "",
        "slug": "najczestsze-bledy-podczas-wymiany-instalacji"
      },
      {
        "id": 7,
        "subHeading": "Modernizacja instalacji elektrycznej w Warszawie – przykłady realizacji",
        "paragraph": "W jednym z mieszkań na Mokotowie (blok z 1982 r.) wymieniliśmy kompletną instalację – właściciel nie mógł jednocześnie włączać pralki i piekarnika. Po modernizacji wykonaliśmy 11 obwodów, dodaliśmy RCD oraz przewody miedziane. W innym przypadku na Ursynowie modernizacja była konieczna po awarii i przepaleniu przewodów w ścianie. Dzięki wymianie instalacja jest bezpieczna, a właściciel mógł zamontować płytę indukcyjną.",
        "imageLarge": "",
        "imageSm": "",
        "slug": "modernizacja-instalacji-elektrycznej-warszawa-realizacje"
      },
      {
        "id": 8,
        "subHeading": "Umów darmowe oględziny instalacji",
        "paragraph": "Jeśli Twoja instalacja ma już swoje lata lub chcesz przygotować mieszkanie pod nowe urządzenia – wykonamy bezpłatną ocenę techniczną i przedstawimy rzetelną wycenę. Zadzwoń: 790 270 070 lub napisz: biuro@montroe.com.",
        "imageLarge": "",
        "imageSm": "",
        "slug": "umow-darmowe-ogledziny"
      }
    ]
  },
  {
    "id": "3",
    "publicationDate": "9 listopada 2025 r.",
    "name": "Stacja ładowania samochodów elektrycznych – ile kosztuje i o czym pamiętać przy montażu?",
    "image": "ladowarka.png",
    "path": "stacja-ladowania-samochodow-elektrycznych-warszawa",
    "lead": "Coraz więcej mieszkańców Warszawy przesiada się na samochody elektryczne, ale publiczne stacje ładowania wciąż bywają zajęte lub oddalone od domu. Rozwiązaniem jest własna stacja ładowania (tzw. wallbox), która pozwala ładować auto taniej, szybciej i o dowolnej porze. Wyjaśniamy, jakie są rodzaje stacji ładowania, ile kosztuje montaż oraz jakie formalności trzeba spełnić w Warszawie.",
    "summaryList": [
      { "id": 1, "name": "domowa stacja ładowania (wallbox) ładuje samochód nawet 5 razy szybciej niż zwykłe gniazdko" },
      { "id": 2, "name": "moc ładowarek AC: 3,6–22 kW, DC: 20–150 kW" },
      { "id": 3, "name": "montaż stacji wymaga sprawdzenia instalacji i zabezpieczeń" },
      { "id": 4, "name": "koszt wallboxa z montażem w Warszawie to najczęściej 3–6 tys. zł" },
      { "id": 5, "name": "wspólnoty mieszkaniowe muszą wyrazić zgodę na instalację w garażu podziemnym" },
      { "id": 6, "name": "oferujemy darmowe oględziny techniczne i wycenę montażu stacji ładowania" }
    ],
    "contentList": [
      { "id": 1, "name": "Dlaczego warto mieć własną stację ładowania?", "link": "#dlaczego-warto-miec-wlasna-stacje-ladowania" },
      { "id": 2, "name": "Rodzaje stacji ładowania – którą wybrać?", "link": "#rodzaje-stacji-ladowania-ktora-wybrac" },
      { "id": 3, "name": "Jak wygląda montaż stacji ładowania w Warszawie?", "link": "#jak-wyglada-montaz-ladowarki-w-warszawie" },
      { "id": 4, "name": "Ile kosztuje montaż stacji ładowania?", "link": "#ile-kosztuje-montaz-stacji-ladowania" },
      { "id": 5, "name": "Stacja ładowania w domu jednorodzinnym vs. w bloku", "link": "#ladowarka-dom-vs-blok" },
      { "id": 6, "name": "Najczęstsze błędy przy instalacji stacji ładowania", "link": "#najczestsze-bledy-przy-instalacji-stacji-ladowania" },
      { "id": 7, "name": "Stacje ładowania w Warszawie – przykłady realizacji", "link": "#stacje-ladowania-warszawa-realizacje" },
      { "id": 8, "name": "Umów darmowy audyt pod montaż stacji", "link": "#umow-darmowy-audyt-stacji" }
    ],
    "articleStructure": [
      {
        "id": 1,
        "subHeading": "Dlaczego warto mieć własną stację ładowania?",
        "paragraph": "Ładowanie samochodu elektrycznego z gniazdka 230 V może trwać nawet ponad dobę. Wallbox o mocy 7,4–11 kW skraca ten czas kilkukrotnie i zapewnia pełne bezpieczeństwo instalacji. Dodatkowa korzyść to niższe koszty – ładowanie w domu jest nawet o 40–60% tańsze niż na publicznych stacjach ładowania w Warszawie. Własna stacja to również pełna wygoda – samochód ładuje się wtedy, kiedy nie jest potrzebny: w nocy lub podczas pracy.",
        "imageLarge": "/ladowarka2.jpg",
        "imageSm": "/ladowarka2.jpg",
        "slug": "dlaczego-warto-miec-wlasna-stacje-ladowania"
      },
      {
        "id": 2,
        "subHeading": "Rodzaje stacji ładowania – którą wybrać?",
        "paragraph": "Najpopularniejsze są stacje AC (prąd zmienny) o mocy 3,6–22 kW. Wallbox 7,4 lub 11 kW to idealny wybór do domu lub garażu podziemnego. Stacje DC (ładowanie szybkie) są droższe i wymagają znacznie mocniejszej instalacji. W Warszawie montuje się je głównie przy firmach oraz obiektach komercyjnych. Wybór stacji ładowania pojazdów zależy od: mocy przyłączeniowej, rodzaju pojazdu, częstotliwości ładowania oraz możliwości technicznych budynku.",
        "imageLarge": "",
        "imageSm": "",
        "slug": "rodzaje-stacji-ladowania-ktora-wybrac"
      },
      {
        "id": 3,
        "subHeading": "Jak wygląda montaż stacji ładowania w Warszawie?",
        "paragraph": "Proces montażu składa się z kilku kroków: 1) ocena instalacji i zabezpieczeń, 2) sprawdzenie mocy przyłączeniowej, 3) wyznaczenie trasy przewodów, 4) montaż wallboxa, 5) podłączenie do rozdzielnicy i zabezpieczeń, 6) pomiary końcowe. W domach jednorodzinnych instalacja trwa zwykle 2–4 godziny. W garażach podziemnych w Warszawie – 1–2 dni z uwagi na dłuższe trasy kablowe i konieczność uzgodnień ze wspólnotą.",
        "imageLarge": "",
        "imageSm": "",
        "slug": "jak-wyglada-montaz-stacji-ladowania-w-warszawie"
      },
      {
        "id": 4,
        "subHeading": "Ile kosztuje montaż stacji ładowania?",
        "paragraph": "Koszt zależy od wybranej stacji ładowania oraz zakresu prac. Wallboxy kosztują 2–3,5 tys. zł. Montaż w Warszawie to zwykle 1–2,5 tys. zł, zależnie od długości okablowania i stopnia skomplikowania instalacji. Średnio całość zamyka się w przedziale 3–6 tys. zł. W przypadku firm lub stacji DC koszt rośnie nawet do kilkudziesięciu tysięcy złotych.",
        "imageLarge": "",
        "imageSm": "",
        "slug": "ile-kosztuje-montaz-stacji-ladowania"
      },
      {
        "id": 5,
        "subHeading": "Stacja ładowania w domu jednorodzinnym vs. w bloku",
        "paragraph": "W domu jednorodzinnym montaż jest prostszy – wystarczy sprawdzić możliwości instalacji, dobrać zabezpieczenia i wybrać miejsce montażu. W blokach i garażach podziemnych w Warszawie wymagane jest zgłoszenie zamiaru montażu do wspólnoty lub spółdzielni. Coraz więcej wspólnot realizuje projekty tzw. infrastruktury ładowania, które umożliwiają montaż wallboxów wielu mieszkańcom równocześnie.",
        "imageLarge": "",
        "imageSm": "",
        "slug": "stacja-ladowania-dom-vs-blok"
      },
      {
        "id": 6,
        "subHeading": "Najczęstsze błędy przy instalacji stacji ładowania",
        "paragraph": "Najczęstsze błędy to: podłączanie wallboxa do starej lub przeciążonej instalacji, brak osobnego obwodu, brak RCD typu A lub B, nieodpowiedni przekrój przewodów, montaż bez wcześniejszych pomiarów lub dobór stacji ładowania o mocy większej niż pozwala przyłącze. Każdy z tych błędów zwiększa ryzyko awarii i skraca żywotność urządzeń.",
        "imageLarge": "",
        "imageSm": "",
        "slug": "najczestsze-bledy-przy-instalacji-stacji-ladowania"
      },
      {
        "id": 7,
        "subHeading": "Stacje ładowania w Warszawie – przykłady realizacji",
        "paragraph": "Na Wilanowie zamontowaliśmy wallbox 11 kW w garażu podziemnym – trasa kablowa miała 32 metry, a prace trwały jeden dzień. Na Bielanach w domu jednorodzinnym wykonaliśmy montaż stacji ładowania 22 kW wraz z modernizacją rozdzielnicy. W firmie transportowej na Białołęce zainstalowaliśmy 6 punktów ładowania AC oraz jedną stację ładowania DC 40 kW.",
        "imageLarge": "/ladowarka.png",
        "imageSm": "/ladowarka.png",
        "slug": "stacje-ladowania-warszawa-realizacje"
      },
      {
        "id": 8,
        "subHeading": "Umów darmowy audyt pod montaż stacji",
        "paragraph": "Chcesz zamontować własną stację ładowania? Wykonamy bezpłatną ocenę techniczną i przedstawimy rzetelną wycenę montażu. Zadzwoń: 790 270 070 lub napisz: biuro@montroe.com.",
        "imageLarge": "",
        "imageSm": "",
        "slug": "umow-darmowy-audyt-stacji"
      }
    ]
  },
  {
    id: "4",
    publicationDate: "14 maja 2026 r.",
    name: "Kompensacja mocy biernej - jak sprawdzić czy płacę rachunki za moc bierną?",
    image: "invoice.jpg",
    path: "jak-sprawdzic-czy-place-za-moc-bierna",
    lead:
      "Na wielu fakturach za prąd pojawiają się dodatkowe opłaty za energię bierną – często niezauważane przez właścicieli firm. Wystarczy jednak kilka minut, aby sprawdzić, czy Twoja firma płaci za moc bierną i oszacować możliwe oszczędności. Skorzystaj z kalkulatora i dowiedz się, czy kompensacja mocy biernej może obniżyć Twoje rachunki.",
    summaryList: [
      {
        id: 1,
        name:
          "opłaty za energię bierną pojawiają się najczęściej przy urządzeniach indukcyjnych lub pojemnościowych",
      },
      {
        id: 2,
        name:
          "na fakturze szukaj pozycji „energia bierna indukcyjna” lub „energia bierna pojemnościowa”",
      },
      {
        id: 3,
        name:
          "wysokie opłaty za moc bierną można zwykle ograniczyć dzięki kompensacji",
      },
      {
        id: 4,
        name:
          "skorzystaj z kalkulatora, aby szybko sprawdzić potencjalne oszczędności",
      },
      {
        id: 5,
        name:
          "wykonujemy darmowy audyt i dobieramy odpowiedni kompensator mocy biernej",
      },
    ],
    contentList: [
      {
        id: 1,
        name: "Jak sprawdzić, czy płacisz za moc bierną?",
        link: "#jak-sprawdzic-czy-placisz-za-moc-bierna",
      },
      {
        id: 2,
        name: "Kalkulator opłat za moc bierną",
        link: "#kalkulator-oplat-za-moc-bierna",
      },
      {
        id: 3,
        name: "Jak zmniejszyć opłaty za energię bierną?",
        link: "#jak-zmniejszyc-oplaty-za-energie-bierna",
      },
      {
        id: 4,
        name: "Zamawiam darmowy audyt",
        link: "#zamawiam-darmowy-audyt",
      },
    ],
    articleStructure: [
      {
      id: 1,
      subHeading: "Jak sprawdzić, czy płacisz za moc bierną?",
      paragraph:
        "Najprostszy sposób to sprawdzenie faktury za energię elektryczną. Jeśli widzisz pozycje takie jak „energia bierna indukcyjna”, „energia bierna pojemnościowa” lub „ponadumowny pobór energii biernej”, oznacza to dodatkowe koszty naliczane przez operatora sieci. Opłaty te mogą wynosić od kilkudziesięciu do nawet kilku tysięcy złotych miesięcznie – szczególnie w firmach korzystających z klimatyzacji, silników, wind, sprężarek czy oświetlenia LED.",
      imageLarge: "/faktura.jpg",
      imageSm: "/faktura.jpg",
      slug: "jak-sprawdzic-czy-placisz-za-moc-bierna",
      },
      {
      id: 2,
      subHeading: "Kalkulator opłat za moc bierną",
      paragraph:
        "Wpisz wartości z faktury do kalkulatora, aby sprawdzić, ile możesz oszczędzić dzięki kompensacji mocy biernej. W większości przypadków odpowiednio dobrany kompensator pozwala obniżyć opłaty niemal do zera.",
      imageLarge: "",
      imageSm: "",
      slug: "kalkulator-oplat-za-moc-bierna",
      },
      {
      id: 3,
      subHeading: "Jak zmniejszyć opłaty za energię bierną?",
      paragraph:
        "Najskuteczniejszym rozwiązaniem jest montaż kompensatora mocy biernej. Urządzenie automatycznie stabilizuje współczynnik mocy i ogranicza pobór energii biernej z sieci. Dzięki temu rachunki za prąd mogą zostać znacząco obniżone, a inwestycja zwykle zwraca się w ciągu kilku miesięcy.",
      imageLarge: "/kompensator.jpg",
      imageSm: "/kompensator.jpg",
      slug: "jak-zmniejszyc-oplaty-za-energie-bierna",
      },
      {
      id: 4,
      subHeading: "Zamawiam darmowy audyt",
      paragraph:
        "Nie wiesz, czy kompensacja będzie opłacalna w Twojej firmie? Wyślij nam faktury za energię z ostatnich miesięcy. Przygotujemy darmową analizę i pokażemy możliwe oszczędności. Zadzwoń: 790 270 070 lub napisz: biuro@montroe.com.",
      imageLarge: "",
      imageSm: "",
      slug: "zamawiam-darmowy-audyt",
      },
    ],
  }
]