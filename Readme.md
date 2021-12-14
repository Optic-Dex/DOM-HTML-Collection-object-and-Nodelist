1. Hvad er en HTMLCollection?
 en HTML DOM Collection er når du bruger en metode som 
 getElementsByTagName() til at få en bestemt type tags ned i en variable
 eller getElementsByClassName() til at få alle HTML elementer med en Bestemt class ned i en variable den variable vil så være din Collection

 2. Hvad er en Nodelist?

en Nodelist er en Collection af node elementer fra dit html document.
nogle ældre browsers returner en Nodelist istedet for en HTML collection når du bruger getElementsByClassName() - flest browser Returner en Nodelist når du bruger querySelectorAll()


3. Er de begge ens ? 
de er meget ens 
de begge to en form for collection af objecter
forskellen er at en HTML collection, kan du bruge navn id eller index nr til at finde dit element og en node list kan du kun bruge index nr og 


4. Hvad kan de begge sammenlignes med
Arrays :) 

5. Har de begge en lenght ? 
ja det har de som du kan bruge til at loop igennem din elementer med
de begge har en lenght property der definer deres størrelse

6. Er der tilhørende indeks i både HTML Collection og Nodelist
ja det er der 
de begge bruger array agtigt index system til at definer elementernes plads

7. Hvordan kan man tilgå HTMLCollections elementer?
getElementsByTagName() og i nogen af de nyere browser getElementsByClassName()

8. Hvordan kan man tilgå NodeList elementer?
document.querySelectorAll() og nogen af de ældre browser getElementsByClassName()


9. Hvilken en af dem kan indholde attributes og textnode
kun en nodelist kan indholde attributes og textnodes 

kommentar
der er flere måder at få et bestemt element fra en Nodelist eller HTML Collection
jeg kan ikke 100% sige at jeg ved hvad forskellende ellers er på de 2 ud over det der er skrevet. er lidt forvirret på området specielt på nr 9 da som jeg viser i mit script manipulere textnodes ved hjælp af begge 2 så vil sætte pris på et eks på hvad forskellen er :D