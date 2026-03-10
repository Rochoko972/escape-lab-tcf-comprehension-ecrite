import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const DocSMS=({from,time,message})=>(<div style={{background:"#1a1a2e",borderRadius:16,padding:"1rem",maxWidth:320,border:"2px solid #2a2a4a",marginBottom:"1rem"}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:8,paddingBottom:6,borderBottom:"1px solid #2a2a4a"}}><span style={{fontWeight:700,fontSize:".85rem",color:"#fff"}}>{from}</span><span style={{fontSize:".7rem",color:"#888",fontFamily:"monospace"}}>{time}</span></div><div style={{background:"#0066cc",color:"#fff",padding:".6rem .9rem",borderRadius:"14px 14px 4px 14px",fontSize:".85rem",lineHeight:1.45,maxWidth:"90%"}}>{message}</div></div>);

const DocPanneau=({title,lines,icon,color})=>(<div style={{background:"#fff",color:"#222",borderRadius:8,padding:"1rem 1.2rem",maxWidth:350,borderLeft:`5px solid ${color||"#c0392b"}`,marginBottom:"1rem",boxShadow:"0 2px 8px rgba(0,0,0,.2)"}}>{icon&&<div style={{fontSize:"1.5rem",marginBottom:4}}>{icon}</div>}{title&&<div style={{color:"#fff",fontWeight:700,fontSize:".8rem",padding:".3rem .6rem",borderRadius:4,display:"inline-block",marginBottom:8,background:color||"#c0392b"}}>{title}</div>}<div style={{fontSize:".85rem",lineHeight:1.5}}>{lines.map((l,i)=><div key={i}>{l}</div>)}</div></div>);

const DocMenu=({restaurant,items,footer})=>(<div style={{background:"#1c0a00",color:"#f0e6d3",borderRadius:10,padding:"1.2rem",maxWidth:320,marginBottom:"1rem",border:"1px solid #3a2515"}}><div style={{fontWeight:700,fontSize:".9rem",textAlign:"center",marginBottom:8,paddingBottom:8,borderBottom:"1px solid #3a2515"}}>{restaurant}</div>{items.map((it,i)=><div key={i} style={{display:"flex",justifyContent:"space-between",fontSize:".82rem",marginBottom:3}}><span>{it.name}</span>{it.price&&<span style={{color:"#d4a574",fontFamily:"monospace",fontWeight:700}}>{it.price}</span>}</div>)}{footer&&<div style={{marginTop:8,paddingTop:8,borderTop:"1px solid #3a2515",fontSize:".75rem",textAlign:"center",color:"#a0886e"}}>{footer}</div>}</div>);

const DocBillet=({lines})=>(<div style={{background:"#f5f0e8",color:"#333",borderRadius:8,maxWidth:380,marginBottom:"1rem",overflow:"hidden",border:"1px dashed #ccc"}}><div style={{background:"#1a3a5c",color:"#fff",padding:".5rem .8rem",fontFamily:"monospace",fontSize:".75rem",fontWeight:700}}>BILLET</div><div style={{padding:".8rem",fontSize:".82rem",lineHeight:1.6}}>{lines.map((l,i)=><div key={i}>{l}</div>)}</div></div>);

const DocLettre=({header,body,signature})=>(<div style={{background:"#fefdf8",color:"#333",borderRadius:6,padding:"1.2rem",maxWidth:500,marginBottom:"1rem",border:"1px solid #ddd",fontSize:".85rem",lineHeight:1.6}}>{header&&<div style={{fontWeight:700,fontSize:".82rem",color:"#555",marginBottom:8,paddingBottom:8,borderBottom:"1px solid #eee"}}>{header}</div>}<div style={{whiteSpace:"pre-line"}}>{body}</div>{signature&&<div style={{marginTop:"1rem",paddingTop:8,borderTop:"1px solid #eee",fontStyle:"italic",color:"#666",fontSize:".8rem",whiteSpace:"pre-line"}}>{signature}</div>}</div>);

const DocAffiche=({title,lines,color})=>(<div style={{background:"#0d1425",borderRadius:10,padding:"1.2rem",maxWidth:380,marginBottom:"1rem",border:`2px solid ${color||"#2980b9"}`,textAlign:"center"}}><div style={{fontWeight:800,fontSize:"1rem",marginBottom:8,color:color||"#2980b9"}}>{title}</div><div style={{fontSize:".85rem",lineHeight:1.5,color:"#e2e8f0"}}>{lines.map((l,i)=><div key={i}>{l}</div>)}</div></div>);

const DocEmail=({from,to,subject,body})=>(<div style={{background:"#f8f9fa",color:"#333",borderRadius:8,padding:"1rem",maxWidth:480,marginBottom:"1rem",border:"1px solid #ddd",fontSize:".82rem",lineHeight:1.5}}><div style={{padding:"2px 0",borderBottom:"1px solid #eee"}}><b style={{color:"#666",fontSize:".75rem"}}>De :</b> {from}</div><div style={{padding:"2px 0",borderBottom:"1px solid #eee"}}><b style={{color:"#666",fontSize:".75rem"}}>{"\u00c0"} :</b> {to}</div><div style={{padding:"2px 0",borderBottom:"1px solid #eee"}}><b style={{color:"#666",fontSize:".75rem"}}>Objet :</b> <strong>{subject}</strong></div><div style={{marginTop:8,whiteSpace:"pre-line"}}>{body}</div></div>);

const DocArticle=({source,title,body})=>(<div style={{background:"#0d1425",borderRadius:8,padding:"1.2rem",maxWidth:600,marginBottom:"1rem",border:"1px solid rgba(0,212,255,.1)"}}>{source&&<div style={{fontFamily:"monospace",fontSize:".65rem",color:"#00d4ff",textTransform:"uppercase",letterSpacing:".05em",marginBottom:8}}>{source}</div>}{title&&<div style={{fontWeight:700,fontSize:".95rem",marginBottom:8,color:"#fff"}}>{title}</div>}<div style={{fontSize:".85rem",lineHeight:1.65,color:"#94a3b8"}}>{body}</div></div>);

const DocNote=({body})=>(<div style={{background:"#fff9c4",color:"#333",borderRadius:6,padding:"1rem",maxWidth:320,marginBottom:"1rem",boxShadow:"2px 2px 8px rgba(0,0,0,.15)",transform:"rotate(-1deg)",position:"relative"}}><div style={{position:"absolute",top:-8,left:"50%",transform:"translateX(-50%)",fontSize:"1.2rem"}}>{"\ud83d\udccc"}</div><div style={{fontSize:".85rem",lineHeight:1.5,whiteSpace:"pre-line",paddingTop:4}}>{body}</div></div>);

const Doc=({d})=>{if(!d)return null;const M={sms:DocSMS,panneau:DocPanneau,menu:DocMenu,billet:DocBillet,lettre:DocLettre,affiche:DocAffiche,email:DocEmail,article:DocArticle,note:DocNote};const C=M[d.type];return C?<C {...d}/>:<DocArticle body={d.body}/>};

const Q=[
{id:1,doc:{type:"sms",from:"Julie",time:"17:45",message:"Je sors du bureau \u00e0 18h. Je dois passer \u00e0 la pharmacie, \u00e7a prendra une petite demi-heure. Garde-moi une assiette au chaud !"},q:"\u00c0 quelle heure Julie sera-t-elle \u00e0 la maison ?",o:["\u00c0 18 heures.","\u00c0 17 heures 45.","Vers 18 heures 30.","Elle ne sait pas encore."],c:2},
{id:2,doc:{type:"panneau",title:"CABINET M\u00c9DICAL Dr MORIN",lines:["Consultations sur rendez-vous uniquement","Lundi au vendredi : 8h30 \u2013 16h30","Samedi : 9h \u2013 12h (sans rendez-vous)","Ferm\u00e9 le dimanche"],icon:"\ud83c\udfe5",color:"#27ae60"},q:"Quand peut-on venir sans rendez-vous ?",o:["Du lundi au vendredi.","Le samedi matin.","Tous les jours avant 12h.","Le dimanche uniquement."],c:1},
{id:3,doc:{type:"menu",restaurant:"\ud83c\udf7d\ufe0f Bistro du Vieux-Port \u2014 Menu du jour",items:[{name:"Entr\u00e9e : Velout\u00e9 OU Salade C\u00e9sar",price:""},{name:"Plat : Saumon OU Bavette",price:""},{name:"Dessert : Tarte au citron",price:""}],footer:"22,50 $ \u2014 Boisson NON comprise. Servi 11h30-14h30."},q:"Que comprend le prix du menu ?",o:["Entr\u00e9e, plat, dessert et boisson.","Entr\u00e9e, plat et dessert uniquement.","Un plat et un dessert au choix.","Le plat et la boisson seulement."],c:1},
{id:4,doc:{type:"panneau",title:"BIBLIOTH\u00c8QUE GABRIELLE-ROY",lines:["Pr\u00eat gratuit \u2014 Carte obligatoire","Max 5 documents pour 21 jours","Retard : 0,25 $/jour/document","DVD et magazines : 7 jours seulement"],color:"#34495e"},q:"Combien de temps peut-on garder un DVD ?",o:["21 jours.","7 jours.","5 jours.","14 jours."],c:1},
{id:5,doc:{type:"sms",from:"Anne",time:"09:15",message:"Samedi je peux r\u00e9cup\u00e9rer L\u00e9o \u00e0 l'\u00e9cole \u00e0 16h si tu veux. Comme \u00e7a tu auras le temps de pr\u00e9parer la f\u00eate !"},q:"Que propose Anne ?",o:["D'organiser la f\u00eate.","D'aller chercher L\u00e9o \u00e0 l'\u00e9cole.","De garder L\u00e9o samedi soir.","D'aider \u00e0 cuisiner."],c:1},
{id:6,doc:{type:"billet",lines:["VIA RAIL CANADA","Montr\u00e9al \u2192 Qu\u00e9bec","D\u00e9part : 09h15 \u2014 Arriv\u00e9e : 12h28","Voiture 4 \u2014 Place 23A","Classe \u00c9conomie"]},q:"Quelle est la dur\u00e9e du voyage ?",o:["Environ 3 heures.","Environ 4 heures.","Environ 2 heures.","Non indiqu\u00e9e."],c:0},
{id:7,doc:{type:"affiche",title:"\ud83c\udfad FESTIVAL TH\u00c9\u00c2TRE",lines:["10-18 mai \u2014 Parc Lafontaine","Spectacles gratuits en plein air","Ven/sam : 19h et 21h","Dim : 15h (famille)","Pluie : salle polyvalente"],color:"#8e44ad"},q:"Que se passe-t-il s'il pleut ?",o:["Spectacles annul\u00e9s.","Ils ont lieu en salle polyvalente.","Report\u00e9s au lendemain.","Seul le dimanche est maintenu."],c:1},
{id:8,doc:{type:"email",from:"Colis Express",to:"m.chen@mail.ca",subject:"Livraison \u00e9chou\u00e9e",body:"Notre livreur s'est pr\u00e9sent\u00e9 \u00e0 14h20 mais personne n'\u00e9tait l\u00e0. Colis au point relais (D\u00e9panneur Soleil, 340 rue Rachel) pour 7 jours. Apr\u00e8s : retour exp\u00e9diteur."},q:"Que doit faire M. Chen ?",o:["Attendre une 2e tentative.","Aller au D\u00e9panneur Soleil sous 7 jours.","Appeler le livreur.","Contacter l'exp\u00e9diteur."],c:1},
{id:9,doc:{type:"panneau",title:"PARC LAC BEAUMONT",lines:["Baignade : 10h \u00e0 18h","Surveillance : 11h \u00e0 17h seulement","Chiens interdits sur la plage","Stationnement : 8 $/jour"],icon:"\ud83c\udfd6\ufe0f",color:"#e67e22"},q:"\u00c0 17h30, peut-on se baigner ?",o:["Non, \u00e7a ferme \u00e0 17h.","Oui, mais sans surveillance.","Non, interdit apr\u00e8s 17h.","Oui, avec surveillance."],c:1},
{id:10,doc:{type:"note",body:"Sarah,\nJ'ai pris ton parapluie ce matin. Il pleuvait et le mien est cass\u00e9. Je te le rends demain.\n\u2014 Nadia"},q:"Pourquoi Nadia a-t-elle pris le parapluie ?",o:["Sarah le lui a pr\u00eat\u00e9.","Le sien \u00e9tait cass\u00e9 et il pleuvait.","Elle avait oubli\u00e9 le sien.","Pour aller au bureau."],c:1},
{id:11,doc:{type:"article",source:"Le Devoir",title:"Formation professionnelle en hausse",body:"Hausse de 12 % des inscriptions depuis 2021 en \u00e9lectricit\u00e9, soudure et m\u00e9canique. Les \u00e9tudiants sont s\u00e9duits par l'emploi rapide. Mais les centres peinent \u00e0 recruter assez d'enseignants qualifi\u00e9s."},q:"Quel probl\u00e8me est soulev\u00e9 ?",o:["Les dipl\u00f4m\u00e9s ne trouvent pas d'emploi.","Les centres manquent d'enseignants.","Les inscriptions sont en baisse.","Les employeurs pr\u00e9f\u00e8rent l'universit\u00e9."],c:1},
{id:12,doc:{type:"lettre",header:"Objet : Candidature",body:"Nous avons le regret de vous informer que votre profil ne correspond pas aux crit\u00e8res requis. Nous conservons n\u00e9anmoins votre candidature pour d'\u00e9ventuelles opportunit\u00e9s futures.",signature:"Service RH \u2014 Groupe Promax"},q:"Que signifie cette lettre ?",o:["Invitation \u00e0 un entretien.","Refus, mais candidature conserv\u00e9e.","Le poste est supprim\u00e9.","Demande de documents."],c:1},
{id:13,doc:{type:"article",source:"La Presse",title:"T\u00e9l\u00e9travail en recul",body:"Les employeurs imposent 3 jours au bureau, invoquant la collaboration. 78 % des t\u00e9l\u00e9travailleurs jugent leur productivit\u00e9 \u00e9gale ou sup\u00e9rieure au bureau."},q:"Que pensent les t\u00e9l\u00e9travailleurs de leur productivit\u00e9 ?",o:["Inf\u00e9rieure au bureau.","Au moins aussi bonne.","D\u00e9pend du poste.","Pas mesur\u00e9e."],c:1},
{id:14,doc:{type:"email",from:"Syndic",to:"R\u00e9sidents",subject:"Coupure d'eau mardi",body:"Travaux mardi 18 mars, 9h-15h. Eau coup\u00e9e dans l'immeuble. Prolongation possible jusqu'\u00e0 17h si impr\u00e9vu."},q:"Jusqu'\u00e0 quand l'eau pourrait-elle \u00eatre coup\u00e9e ?",o:["15h.","17h si impr\u00e9vu.","18h.","Toute la journ\u00e9e."],c:1},
{id:15,doc:{type:"article",source:"Radio-Canada",body:"Subvention de 15 000 $ max pour isolation thermique. Budget : 12 M$. En 3 mois, seulement 40 % utilis\u00e9. Les responsables sont surpris."},q:"Que conclure de la participation ?",o:["Succ\u00e8s imm\u00e9diat.","Participation inf\u00e9rieure aux attentes.","Budget \u00e9puis\u00e9.","Propri\u00e9taires refusent."],c:1},
{id:16,doc:{type:"article",source:"Le Devoir \u2014 Sant\u00e9",body:"H\u00e9ma-Qu\u00e9bec : r\u00e9serves au plus bas depuis 5 ans (O- et B-). Voyageurs en pays tropicaux : attendre 21 jours."},q:"Qui peut donner imm\u00e9diatement ?",o:["Toute personne n'ayant pas voyag\u00e9 sous les tropiques.","Uniquement les groupes O-.","Toute personne qui se pr\u00e9sente.","Voyageurs de retour depuis 7 jours."],c:0},
{id:17,doc:{type:"article",source:"L'actualit\u00e9",body:"Toronto : prix -4,2 % au trimestre (taux d'int\u00e9r\u00eat). Paradoxe : transactions +8 %, des acheteurs profitant de la baisse."},q:"Que s'est-il pass\u00e9 \u00e0 Toronto ?",o:["Prix et ventes en hausse.","Prix en baisse, ventes en hausse.","Tout en baisse.","Prix en hausse, ventes en baisse."],c:1},
{id:18,doc:{type:"article",source:"Le Soleil",body:"Des immigrants qualifi\u00e9s peinent \u00e0 faire reconna\u00eetre leurs dipl\u00f4mes. L'Ordre exige examens et stages. Les critiques d\u00e9noncent un gaspillage de comp\u00e9tences n\u00e9cessaires au pays."},q:"Que disent les critiques ?",o:["Dipl\u00f4mes \u00e9trangers inf\u00e9rieurs.","Le syst\u00e8me gaspille des comp\u00e9tences.","Immigrants refusent les examens.","L'Ordre devrait dispara\u00eetre."],c:1},
{id:19,doc:{type:"article",source:"Qu\u00e9bec Science",body:"Les arbres partagent via un r\u00e9seau fongique. Surprise : ce r\u00e9seau favorise la m\u00eame esp\u00e8ce, remettant en question l'image d'une for\u00eat solidaire sans distinction."},q:"Que remet en question cette d\u00e9couverte ?",o:["L'existence du r\u00e9seau.","Le partage sans distinction d'esp\u00e8ce.","Le r\u00f4le des champignons.","Les arbres-m\u00e8res."],c:1},
{id:20,doc:{type:"article",source:"La Presse",body:"De plus en plus de commerces refusent le comptant. 6 % des Canadiens n'ont pas de compte bancaire."},q:"Pourquoi le cashless pose probl\u00e8me ?",o:["Commer\u00e7ants perdent de l'argent.","Des gens n'ont pas acc\u00e8s au paiement \u00e9lectronique.","Cartes moins s\u00e9curis\u00e9es.","Frais bancaires en hausse."],c:1},
{id:21,doc:{type:"article",source:"Le Devoir",body:"Semaine de 4 jours test\u00e9e : productivit\u00e9 +8 %, arr\u00eats maladie en baisse. Mais 23 % des employ\u00e9s : stress accru par la compression des t\u00e2ches."},q:"Quel effet n\u00e9gatif ?",o:["Productivit\u00e9 en baisse.","Stress par compression des t\u00e2ches.","Plaintes des clients.","Arr\u00eats maladie en hausse."],c:1},
{id:22,doc:{type:"article",source:"Qu\u00e9bec Science",body:"Mat\u00e9riau biod\u00e9gradable (prot\u00e9ines de pois) : se d\u00e9compose en 6 mois. Mais production 3x plus ch\u00e8re et r\u00e9sistance \u00e0 l'humidit\u00e9 \u00e0 am\u00e9liorer."},q:"Pourquoi pas encore r\u00e9pandu ?",o:["Toxique.","Trop cher et fragile \u00e0 l'humidit\u00e9.","Se d\u00e9compose trop vite.","Consommateurs pr\u00e9f\u00e8rent le plastique."],c:1},
{id:23,doc:{type:"article",source:"Radio-Canada",body:"\u00c9lectrification des bus d'ici 2035. 40 command\u00e9s sur 2 000 n\u00e9cessaires. Aucune usine d'assemblage au Qu\u00e9bec."},q:"Que r\u00e9v\u00e8lent les chiffres ?",o:["Le projet avance bien.","L'\u00e9cart objectif/r\u00e9alit\u00e9 est \u00e9norme.","Co\u00fbt sous-estim\u00e9.","Bus \u00e9lectriques moins bons."],c:1},
{id:24,doc:{type:"article",source:"La Presse",body:"Salon du livre : 120 000 visiteurs, record. Litt\u00e9rature autochtone et BD : +35 %. Mais les 3 plus grands groupes = 60 % des ventes."},q:"Inqui\u00e9tude des \u00e9diteurs ind\u00e9pendants ?",o:["Baisse des visiteurs.","Concentration des ventes chez les grands.","D\u00e9sint\u00e9r\u00eat pour la BD.","Concurrence num\u00e9rique."],c:1},
{id:25,doc:{type:"article",source:"\u00c9ditorial",body:"La transition \u00e9nerg\u00e9tique condamne des communaut\u00e9s. Dire qu'il suffit de former les gens rel\u00e8ve d'un optimisme qui ignore les liens territoire-m\u00e9tier-identit\u00e9."},q:"Reproche aux partisans de la reconversion ?",o:["Refuser la transition.","Sous-estimer le lien m\u00e9tier-territoire-identit\u00e9.","Formations trop ch\u00e8res.","Pas de consultation."],c:1},
{id:26,doc:{type:"article",body:"Depuis le d\u00e9part de Thomas, Madeleine venait chaque jour au bord du fleuve. Non pour esp\u00e9rer son retour \u2014 cette illusion s'\u00e9tait dissip\u00e9e \u2014 mais parce que la r\u00e9p\u00e9tition lui donnait l'impression que le temps continuait de passer."},q:"Pourquoi revient-elle chaque jour ?",o:["Elle esp\u00e8re son retour.","La r\u00e9p\u00e9tition donne un rep\u00e8re temporel.","Pour oublier Thomas.","Pour de bons souvenirs."],c:1},
{id:27,doc:{type:"article",source:"Revue philosophique",body:"La m\u00e9ritocratie culpabilise ceux qui \u00e9chouent (d\u00e9faut personnel) et d\u00e9responsabilise les privil\u00e9gi\u00e9s (fruit du m\u00e9rite seul)."},q:"Effet sur les d\u00e9favoris\u00e9s ?",o:["Les motive.","Les culpabilise.","Offre un espoir.","Incite \u00e0 contester."],c:1},
{id:28,doc:{type:"article",source:"\u00c9thique",body:"Les entreprises invoquent le secret commercial pour refuser de divulguer leurs algorithmes. Les citoyens r\u00e9clament le droit de comprendre. Ces deux droits s'affrontent."},q:"Pourquoi la transparence est-elle difficile ?",o:["Algorithmes trop complexes.","Secret commercial vs droit \u00e0 l'explication.","Entreprises ne poss\u00e8dent pas leurs algos.","Citoyens pas int\u00e9ress\u00e9s."],c:1},
{id:29,doc:{type:"article",source:"Critique litt\u00e9raire",body:"Le roman fait de l'ambigu\u00eft\u00e9 sa force. Le critique regrette un \u00e9pilogue trop explicatif, comme si l'auteur avait voulu lever toute ambigu\u00eft\u00e9."},q:"Pourquoi l'\u00e9pilogue est-il critiqu\u00e9 ?",o:["Trop court, trop de questions.","Trop explicatif, trahit l'ambigu\u00eft\u00e9.","Nouveau personnage maladroit.","Changement de ton."],c:1},
{id:30,doc:{type:"article",source:"Rapport McGill",body:"Corr\u00e9lation scolarit\u00e9/engagement civique. Inattendu : les plus dipl\u00f4m\u00e9s votent plus mais s'engagent MOINS localement."},q:"R\u00e9sultat inattendu ?",o:["Dipl\u00f4m\u00e9s votent moins.","Plus dipl\u00f4m\u00e9s = moins d'engagement local malgr\u00e9 plus de vote.","Aucun lien \u00e9ducation/civisme.","Moins dipl\u00f4m\u00e9s votent autant."],c:1},
{id:31,doc:{type:"article",body:"Il aurait pu partir. Mais il savait que ce qu'il cherchait \u00e9tait ce qui lui faisait peur : choisir de rester quelque part, d\u00e9lib\u00e9r\u00e9ment, sans y \u00eatre contraint."},q:"Que craint-il ?",o:["Quitter celle qu'il aime.","Choisir librement de rester.","La solitude.","Le jugement des autres."],c:1},
{id:32,doc:{type:"article",source:"Linguistique",body:"L'ins\u00e9curit\u00e9 linguistique des Qu\u00e9b\u00e9cois vient de l'histoire, pas de la r\u00e9alit\u00e9 linguistique. Elle pousse certains \u00e0 un registre hypercorrig\u00e9 plus artificiel que leur parler naturel."},q:"Quel paradoxe ?",o:["Le qu\u00e9b\u00e9cois est plus riche.","Vouloir bien parler produit un r\u00e9sultat artificiel.","Les jeunes s'en fichent.","L'ins\u00e9curit\u00e9 a disparu."],c:1},
{id:33,doc:{type:"article",source:"Philosophie politique",body:"Les algorithmes ne montrent que ce qui confirme nos opinions. R\u00e9sultat : pas un d\u00e9bat mais des monologues parall\u00e8les."},q:"Que produisent les algorithmes ?",o:["D\u00e9bat plus divers.","Monologues confirmant nos opinions.","D\u00e9sint\u00e9r\u00eat pour l'info.","D\u00e9mocratisation."],c:1},
{id:34,doc:{type:"article",source:"\u00c9conomie",body:"Les voitures consomment moins par km mais les gens conduisent plus et ach\u00e8tent plus gros. Bilan carbone : en hausse."},q:"Que d\u00e9montre cet exemple ?",o:["Voitures moins polluantes.","Gains d'efficacit\u00e9 annul\u00e9s par les comportements.","Pr\u00e9f\u00e9rence pour les petites voitures.","La technologie suffit."],c:1},
{id:35,doc:{type:"article",source:"M\u00e9dias",body:"Sans journal local, les municipalit\u00e9s \u00e9mettent 20 % de dette en plus. Les \u00e9lus d\u00e9pensent quand personne ne regarde."},q:"Quel lien m\u00e9dias/finances ?",o:["Journaux co\u00fbtent trop aux villes.","Absence de m\u00e9dias = plus de dette.","Villes avec journal = plus endett\u00e9es.","M\u00e9dias incitent \u00e0 d\u00e9penser."],c:1},
{id:36,doc:{type:"article",source:"Bio\u00e9thique",body:"Le consentement \u00e9clair\u00e9 suppose une d\u00e9cision rationnelle. Mais douleur et stress alt\u00e8rent le jugement. Un patient aux urgences n'est pas en condition de consentir."},q:"Que remet en question l'auteur ?",o:["Le principe du consentement.","Les conditions du recueil du consentement.","La comp\u00e9tence des urgentistes.","Le droit de refuser un soin."],c:1},
{id:37,doc:{type:"article",body:"Dire je comprends, c'est remplir le silence, substituer au myst\u00e8re de la douleur la familiarit\u00e9 rassurante de sa propre exp\u00e9rience."},q:"Que font les gens en disant je comprends ?",o:["Empathie sinc\u00e8re.","Remplacent la douleur par leur propre v\u00e9cu.","Veulent finir la conversation.","Avouent leur impuissance."],c:1},
{id:38,doc:{type:"article",source:"M\u00e9dias",body:"Tornades et inondations = couverture massive. Pollution (15x plus meurtri\u00e8re) = invisible. Ce biais oriente les financements vers la reconstruction, pas la pr\u00e9vention."},q:"Cons\u00e9quence politique du biais ?",o:["Plus d'investissement en pr\u00e9vention.","Financements vers reconstruction, pas pr\u00e9vention.","M\u00e9dias censur\u00e9s.","Demande de couverture pollution."],c:1},
{id:39,doc:{type:"article",source:"Philosophie des sciences",body:"Le consensus scientifique peut \u00eatre renvers\u00e9. C'est cette vuln\u00e9rabilit\u00e9 au doute qui le distingue de la croyance, laquelle refuse d'\u00eatre questionn\u00e9e."},q:"Qu'est-ce qui distingue la science de la croyance ?",o:["Certitudes absolues.","Accepter d'\u00eatre remise en question.","La croyance est toujours fausse.","La science ne change pas d'avis."],c:1},
];

function sc(a){let x=0,y=0,z=0;Q.forEach((q,i)=>{const ok=a[i]===q.c;if(i<10&&ok)x++;else if(i<24&&ok)y++;else if(i>=24&&ok)z++});const xp=x/10,yp=y/14,zp=z/15,t=x+y+z,tp=t/39;let n;if(zp>=.8&&yp>=.7)n=tp>=.85?10:tp>=.75?9:8;else if(zp>=.5&&yp>=.6)n=tp>=.65?7:6;else if(yp>=.5&&xp>=.7)n=tp>=.55?6:5;else if(xp>=.7&&yp>=.3)n=4;else if(xp>=.5)n=3;else n=2;const lv=n>=9?"C2":n>=7?"C1":n>=6?"B2":n>=4?"B1":n>=3?"A2":"A1";return{nclc:n,level:lv,total:t,a1a2:x,b1b2:y,c1c2:z,xp,yp,zp}}

const C={bg:"#080c16",s1:"#0d1425",cy:"#00d4ff",ind:"#6366f1",gn:"#10b981",bl:"#3b82f6",rd:"#ef4444",am:"#f59e0b",tx:"#e2e8f0",txm:"#94a3b8",txd:"#64748b"};
const base={fontFamily:"system-ui,sans-serif",background:C.bg,color:C.tx,minHeight:"100vh"};
const b1={fontWeight:700,fontSize:".85rem",letterSpacing:".08em",textTransform:"uppercase",background:`linear-gradient(135deg,${C.cy},${C.ind})`,color:"#fff",border:"none",padding:".9rem 2.5rem",borderRadius:8,cursor:"pointer"};
const b2={fontSize:".8rem",background:"transparent",color:C.txm,border:"1px solid rgba(0,212,255,.15)",padding:".6rem 1.2rem",borderRadius:6,cursor:"pointer",fontFamily:"inherit"};
const b3={...b1,fontSize:".75rem",padding:".6rem 1.2rem",background:`linear-gradient(135deg,${C.gn},#059669)`};

export default function App(){
  const nav=useNavigate();
  const[pg,setPg]=useState("home");
  const[ci,setCi]=useState(0);
  const[ans,setAns]=useState({});
  const[sec,setSec]=useState(3600);
  const[on,setOn]=useState(false);
  const[pop,setPop]=useState(false);
  const[fl,setFl]=useState(new Set());
  const[nv,setNv]=useState(false);
  const[res,setRes]=useState(null);
  const tr=useRef(null);

  useEffect(()=>{if(!on)return;tr.current=setInterval(()=>setSec(p=>{if(p<=1){clearInterval(tr.current);return 0}return p-1}),1000);return()=>clearInterval(tr.current)},[on]);
  useEffect(()=>{if(sec===0&&on){setOn(false);setRes(sc(ans));setPg("results")}},[sec,on,ans]);

  const go=()=>{setAns({});setCi(0);setSec(3600);setOn(true);setFl(new Set());setNv(false);setPg("quiz")};
  const fin=()=>{setOn(false);clearInterval(tr.current);setRes(sc(ans));setPg("results")};
  const pk=(i,j)=>setAns(p=>({...p,[i]:j}));
  const fg=i=>{setFl(p=>{const n=new Set(p);n.has(i)?n.delete(i):n.add(i);return n})};
  const fm=s=>`${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;
  const ct=Object.keys(ans).length;
  const L=["A","B","C","D"];

  if(pg==="home")return(
    <div style={base}><div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"2rem",textAlign:"center"}}>
      <div style={{fontSize:".65rem",color:C.cy,letterSpacing:".15em",textTransform:"uppercase",marginBottom:"2rem",fontFamily:"monospace"}}>FLAB GAMES</div>
      <h1 style={{fontSize:"clamp(2rem,7vw,3.5rem)",fontWeight:900,background:`linear-gradient(135deg,#fff,${C.cy},${C.ind})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",lineHeight:1,marginBottom:8}}>ESCAPE LAB</h1>
      <p style={{fontSize:"clamp(.75rem,2vw,1rem)",color:C.txm,letterSpacing:".15em",textTransform:"uppercase",marginBottom:"1.5rem"}}>S{"\u00e9"}rie Alpha {"\u2014"} TCF Canada</p>
      <p style={{fontSize:".9rem",color:C.txd,maxWidth:460,lineHeight:1.6,marginBottom:"2.5rem"}}>39 questions avec vrais pi{"\u00e8"}ges. 60 minutes. A1{"\u2192"}C2.</p>
      <button style={b1} onClick={go}>COMMENCER</button>
      <div style={{display:"flex",gap:"2rem",marginTop:"2.5rem",flexWrap:"wrap",justifyContent:"center"}}>
        {[["39","Questions"],["60","Min"],["NCLC","Score"]].map(([v,l])=>(<div key={l} style={{textAlign:"center"}}><div style={{fontWeight:700,fontSize:"1.3rem",color:C.cy}}>{v}</div><div style={{fontSize:".6rem",color:C.txd,textTransform:"uppercase"}}>{l}</div></div>))}
      </div>
    </div></div>
  );

  if(pg==="quiz"){const q=Q[ci],ll=ci<10?"A1/A2":ci<24?"B1/B2":"C1/C2",lc=ci<10?C.gn:ci<24?C.bl:C.ind,tc=sec<=300?C.rd:sec<=900?C.am:C.cy;
  return(<div style={base}>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:".6rem 1rem",background:C.s1,borderBottom:"1px solid rgba(0,212,255,.1)",position:"sticky",top:0,zIndex:50,flexWrap:"wrap",gap:4}}>
      <span style={{fontWeight:700,fontSize:".75rem",color:C.cy}}>ESCAPE LAB</span>
      <div style={{display:"flex",alignItems:"center",gap:12}}><span style={{fontWeight:700,fontSize:"1.1rem",color:tc,fontFamily:"monospace"}}>{fm(sec)}</span><span style={{fontSize:".65rem",color:C.txd,fontFamily:"monospace"}}>{ct}/39</span></div>
      <div style={{display:"flex",gap:4}}>
        <button onClick={()=>fg(ci)} style={{...b2,padding:"4px 8px",borderColor:fl.has(ci)?C.ind:"rgba(0,212,255,.15)",color:fl.has(ci)?C.ind:C.txm}}>{"\u2691"}</button>
        <button onClick={()=>setNv(!nv)} style={{...b2,padding:"4px 8px"}}>{"\u2630"}</button>
      </div>
    </div>
    <div style={{height:3,background:"#121a32"}}><div style={{height:"100%",width:`${(ct/39)*100}%`,background:`linear-gradient(90deg,${C.cy},${C.ind})`,transition:"width .3s"}}/></div>
    <div style={{maxWidth:780,margin:"0 auto",padding:"1.5rem 1rem",display:"flex",flexDirection:"column",minHeight:"calc(100vh - 60px)"}}>
      <span style={{display:"inline-block",padding:"3px 10px",borderRadius:100,fontSize:".6rem",fontWeight:700,marginBottom:12,border:`1px solid ${lc}33`,color:lc,background:`${lc}11`,alignSelf:"flex-start"}}>Q{ci+1} {"\u00b7"} {ll}</span>
      <Doc d={q.doc}/>
      <p style={{fontWeight:600,fontSize:".95rem",marginBottom:12,color:"#fff"}}>{q.q}</p>
      <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:"1.5rem"}}>
        {q.o.map((o,i)=>(<button key={i} onClick={()=>pk(ci,i)} style={{display:"flex",alignItems:"flex-start",gap:10,padding:".8rem 1rem",background:ans[ci]===i?"rgba(0,212,255,.06)":C.s1,border:`1px solid ${ans[ci]===i?C.cy:"rgba(0,212,255,.1)"}`,borderRadius:8,cursor:"pointer",textAlign:"left",fontFamily:"inherit",fontSize:".85rem",color:C.tx,lineHeight:1.45,transition:"all .15s"}}>
          <span style={{flexShrink:0,width:26,height:26,borderRadius:5,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"monospace",fontWeight:700,fontSize:".7rem",background:ans[ci]===i?C.cy:"#121a32",color:ans[ci]===i?C.bg:C.txd}}>{L[i]}</span>
          <span>{o}</span>
        </button>))}
      </div>
      <div style={{display:"flex",justifyContent:"space-between",marginTop:"auto",paddingTop:"1rem",gap:8}}>
        <button style={{...b2,opacity:ci===0?.3:1}} onClick={()=>setCi(Math.max(0,ci-1))} disabled={ci===0}>{"\u2190"} Pr{"\u00e9"}c.</button>
        {ci<38?<button style={b2} onClick={()=>setCi(ci+1)}>Suiv. {"\u2192"}</button>:<button style={b3} onClick={()=>setPop(true)}>TERMINER</button>}
      </div>
    </div>
    {nv&&<div onClick={e=>{if(e.target===e.currentTarget)setNv(false)}} style={{position:"fixed",inset:0,background:"rgba(0,0,0,.6)",zIndex:100,display:"flex",justifyContent:"flex-end"}}>
      <div style={{width:"min(360px,88vw)",background:C.s1,padding:"1.2rem",overflowY:"auto",borderLeft:"1px solid rgba(0,212,255,.1)"}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:12}}><span style={{fontWeight:700,fontSize:".8rem",color:C.cy}}>NAVIGATION</span><button style={{...b2,padding:"2px 8px"}} onClick={()=>setNv(false)}>{"\u2715"}</button></div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(38px,1fr))",gap:5,marginBottom:12}}>
          {Q.map((_,i)=>(<div key={i} onClick={()=>{setCi(i);setNv(false)}} style={{aspectRatio:"1",borderRadius:5,border:`1px solid ${i===ci?C.cy:ans[i]!=null?C.cy+"40":"rgba(0,212,255,.1)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"monospace",fontSize:".65rem",fontWeight:700,cursor:"pointer",background:ans[i]!=null?C.cy+"1a":"#121a32",color:ans[i]!=null?C.cy:C.txd,boxShadow:i===ci?`0 0 8px ${C.cy}40`:"none",position:"relative"}}>{i+1}{fl.has(i)&&<span style={{position:"absolute",top:-2,right:1,fontSize:".5rem",color:C.am}}>{"\u2691"}</span>}</div>))}
        </div>
        <button style={{...b3,width:"100%"}} onClick={()=>{setNv(false);setPop(true)}}>TERMINER</button>
      </div>
    </div>}
    {pop&&<div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.7)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem"}}>
      <div style={{background:C.s1,border:"1px solid rgba(0,212,255,.1)",borderRadius:14,padding:"1.8rem",maxWidth:400,width:"100%",textAlign:"center"}}>
        <div style={{fontSize:"2rem",marginBottom:8}}>{"\u26a0\ufe0f"}</div>
        <div style={{fontWeight:700,color:C.cy,marginBottom:8}}>Terminer ?</div>
        <div style={{fontSize:".82rem",color:C.txm,marginBottom:"1.2rem"}}>{ct}/39.{39-ct>0&&<> {39-ct} sans r{"\u00e9"}ponse.</>}</div>
        <div style={{display:"flex",gap:8,justifyContent:"center"}}><button style={b2} onClick={()=>setPop(false)}>Continuer</button><button style={b3} onClick={()=>{setPop(false);fin()}}>Confirmer</button></div>
      </div>
    </div>}
  </div>)}

  if(pg==="results"&&res){const nc=["#ef4444","#f97316","#f59e0b","#eab308","#84cc16","#22c55e","#10b981","#06b6d4","#3b82f6","#6366f1"];
  return(<div style={base}><div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"2.5rem 1.2rem"}}>
    <div style={{fontSize:".65rem",color:C.txd,fontFamily:"monospace",letterSpacing:".1em",marginBottom:6}}>S{"\u00c9"}RIE ALPHA</div>
    <div style={{fontSize:"3.5rem",fontWeight:900,background:`linear-gradient(135deg,${C.cy},${C.ind})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{res.level}</div>
    <div style={{fontFamily:"monospace",fontSize:".85rem",color:C.txm,marginTop:4,marginBottom:"2rem"}}>NCLC : {res.nclc}/10</div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))",gap:8,maxWidth:560,width:"100%",marginBottom:"1.5rem"}}>
      {[["Total",res.total,39,C.cy],["A1/A2",res.a1a2,10,C.gn],["B1/B2",res.b1b2,14,C.bl],["C1/C2",res.c1c2,15,C.ind]].map(([l,v,m,c])=>(<div key={l} style={{background:C.s1,border:"1px solid rgba(0,212,255,.1)",borderRadius:8,padding:"1rem",textAlign:"center"}}><div style={{fontSize:".6rem",color:C.txd,fontFamily:"monospace",marginBottom:4}}>{l}</div><div style={{fontWeight:700,fontSize:"1.4rem",color:c}}>{v}/{m}</div><div style={{fontSize:".65rem",color:C.txd}}>{Math.round(v/m*100)}%</div></div>))}
    </div>
    {[["A1/A2",res.xp,C.gn],["B1/B2",res.yp,C.bl],["C1/C2",res.zp,C.ind]].map(([l,p,c])=>(<div key={l} style={{display:"flex",alignItems:"center",gap:8,marginBottom:8,width:"100%",maxWidth:420}}><span style={{fontFamily:"monospace",fontSize:".7rem",color:C.txd,width:42,textAlign:"right"}}>{l}</span><div style={{flex:1,height:7,background:"#121a32",borderRadius:100,overflow:"hidden"}}><div style={{height:"100%",width:`${p*100}%`,background:c,borderRadius:100}}/></div><span style={{fontFamily:"monospace",fontSize:".7rem",color:C.txm,width:32}}>{Math.round(p*100)}%</span></div>))}
    <div style={{display:"flex",gap:2,margin:"1.5rem 0",maxWidth:420,width:"100%"}}>
      {[1,2,3,4,5,6,7,8,9,10].map(n=>(<div key={n} style={{flex:1,height:28,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:".6rem",borderRadius:3,background:n===res.nclc?nc[n-1]:"#121a32",color:n===res.nclc?"#fff":C.txd,transform:n===res.nclc?"scaleY(1.3)":"none"}}>{n}</div>))}
    </div>
    <div style={{display:"flex",gap:8,marginTop:"1rem"}}><button style={b1} onClick={go}>RECOMMENCER</button><button style={b2} onClick={()=>nav("/")}>TOUTES LES S\u00c9RIES</button></div>
  </div></div>)}
  return null;
}
