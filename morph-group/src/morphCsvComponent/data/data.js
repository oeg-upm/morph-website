
const data = {
    gtfs:{
        url:'https://raw.githubusercontent.com/oeg-dataintegration/morph-csv-demo/master/data/gtfs/',
        queries:{
            1:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            2:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            3:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            4:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            5:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            6:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            7:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            8:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            9:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            10:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            11:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            12:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            13:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            14:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            15:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            16:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            17:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            18:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },            

        }
    },
    bio2rdf:{
        url:'https://raw.githubusercontent.com/oeg-dataintegration/morph-csv-demo/master/data/bio2rdf/',
        queries:{
            1:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            2:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            3:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            4:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            5:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            6:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            7:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            8:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            9:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            10:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            }           
        }
    },
    bsbm:{
        url:'https://raw.githubusercontent.com/oeg-dataintegration/morph-csv-demo/master/data/bsbm/',
        queries:{
            1:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            2:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            3:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            4:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            5:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            6:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            7:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            8:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            9:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            10:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            }           
        }
    }
}

const evaluation = {
    gtfs:{
        labels:["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10","q11","q12","q13","q14","q15","q16","q17","q18"],
        mrdblabels:["Q1","Q2","Q4","Q6","Q7","Q9","Q12","Q13","Q14","Q17"],
        ontoplabels:["Q1","Q2","Q3","Q4","Q5","Q7","Q9","Q13","Q14","Q17"],
        sizes:{
            '1':{
                load:{
                  naive:[1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,0],
                  morphcsv:[2.039,1.709,1.680,1.765,1.805,1.739,1.972,1.965,2.306,1.733,1.799,1.906,1.711,1.878,1.744,1.845,1.747,1.829,0]
                },
                execution:{
                    ontop:{
                        naive:[10.659,0,6.744,5.918,0,0,0,6.605,7.458,6.859,0],
                        morphcsv:[9.114,5.939,6.172,5.985,67.769,6.652,21.01,5.855,6.342,5.939,0]
                    },
                    mrdb:{
                        naive:[7.388,3.808,3.388,3.439,3.617,329.469,3.521,3.818,4.702,3.785,0],
                        morphcsv:[8.485,5.257,4.163,4.108,4.746,26.094,5.446,4.538,5.528,5.173,0]
                    }
                },
              },
              '10':{
                load:{
                  naive:[1.954,1.954,1.954,1.954,1.954,1.954,1.954,1.954,1.954,1.954,1.954,1.954,1.954,1.954,1.954,1.954,1.954,1.954,0],
                  morphcsv:[3.147,1.809,1.766,1.748,1.754,1.714,2.406,2.419,4.862,2.031,1.830,2.242,1.857,1.970,1.982,1.842,2.023,1.872,0]
                },
                execution:{
                    ontop:{
                        naive:[28.252,0,8.983,7.349,0,0,0,8.797,29.1,8.227,0],
                        morphcsv:[26.945,7.226,7.332,5.927,2355.978,7.063,84.293,6.056,8.54,6.523,0]
                    },
                    mrdb:{
                  naive:[24.842,5.292,4.336,4.128,6.433,7200,4.68,5.292,10.771,5.712,0],
                  morphcsv:[25.616,5.399,4.31,4.121,5.169,98.616,5.263,4.957,4.374,5.671,0]
                    }
                },
              },
                '100':{
                load:{
                    naive:[10.364,10.364,10.364,10.364,10.364,10.364,10.364,10.364,10.364,10.364,10.364,10.364,10.364,10.364,10.364,10.364,10.364,10.364,0],
                    morphcsv:[16.425,2.330,2.349,1.714,1.746,1.752,6.228,5.527,49.154,4.984,1.806,5.814,3.055,2.911,3.622,1.912,3.192,2.090,0]
                    },
                execution:{
                    ontop:{
                        naive:[292.85,0,19.803,17.443,0,0,0,25.307,41.403,27.331,0],
                        morphcsv:[238.734,11.566,11.072,5.93,7200,11.734,7200,8.239,8.54,10.176,0]
                    },
                    mrdb:{
                  naive:[223.653,19.719,13.284,12.614,18.188,7200,14.527,19.554,62.927,20.995,0],
                  morphcsv:[221.745,9.971,4.688,3.883,8.666,7200,9.689,8.027,5.151,11.754,0]
                    }
                },
              },
                  '1000':{
                load:{
                  naive:[107.787,107.787,107.787,107.787,107.787,107.787,107.787,107.787,107.787,107.787,107.787,107.787,107.787,107.787,107.787,107.787,107.787,107.787,0],
                  morphcsv:[182.896,8.415,8.705,1.966,2.078,1.932,102.545,79.709,466.228,32.033,3.733,45.925,14.673,126.429,23.596,2.614,15.035,2.417,0]
                },
                execution:{
                    ontop:{
                        naive:[7200,0.00,335.79,17.686,0.00,0.00,0.00,1177.5,433.216,198.323],
                        morphcsv:[7200,14.469,14.126,6.011,7200,102.955,7200,21.44,309.2366,49.445,0]
                    },
                    mrdb:{
                  naive:[7200,169.416,113.633,110.379,182.288,7200,125.95,180.063,112.474,202.765,0],
                  morphcsv:[6005.982,113.564,6.645,4.129,92.406,7200,94.385,47.906,97.191,73.125,0]
                    }
                },
              }            
        }
    },
    bsbm:{
        labels:["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10","q11","q12"],
        ontoplabels:[
            "Q1",
            "Q3",
            "Q4",
            "Q5",
            "Q10"
        ],
        mrdblabels:[
            "Q1",
            "Q2",
            "Q3",
            "Q4",
            "Q5",
            "Q6",
            "Q7",
            "Q8",
            "Q9",
            "Q10",
            "Q12"
            
        ],
        sizes:{
            '45k':{
                load:{
                  naive:[22.534,22.534,22.534,22.534,22.534,22.534,22.534,22.534,22.534,22.534,22.534,22.534,0],
                  morphcsv:[8.895,11.942,7.962,4.738,7.742,2.859,11.311,48.383,15.484,10.688,61.356,13.403,0]
                },
                execution:{
                    ontop:{
                        naive:[17.897,9.961,36.808,0,0,0],
                        morphcsv:[29.496,12.270,22.643,253.317,23.092,0],
                    },
                    mrdb:{
                  naive:[733.615,190.603,30.813,147.203,0,25.264,295.016,28.704,44.982,26.202,214.245,0],
                  morphcsv:[20.327,19.217,10.782,141.615,90.671,5.272,248.335,50.973,26.398,18.731,171.194,0]
                    }
                },
              },
              '90k':{
                load:{
                  naive:[54.730,54.730,54.730,54.730,54.730,54.730,54.730,54.730,54.730,54.730,54.730,54.730,0],
                  morphcsv:[13.758,18.828,12.872,7.628,11.967,3.940,18.883,108.130,30.451,18.383,137.062,27.015,0]
                },
                execution:{
                    ontop:{
                        naive:[85.14054322,69.17059421,175.5017313,0,0,0],
                        morphcsv:[54.427,25.915,37.699,1,428.495,51.314,0]
                    },
                    mrdb:{
                  naive:[73.711,366.991,68.321,319.689,0,57.348,839.345,65.079,92.528,59.715,402.898,0],
                  morphcsv:[27.642,29.948,15.990,331.461,633.506,6.186,749.500,103.916,46.559,28.818,358.765,0]
                    }
                },
              },
                '180k':{
                load:{
                  naive:[146.398,146.398,146.398,146.398,146.398,146.398,146.398,146.398,146.398,146.398,146.398,146.398,0],
                  morphcsv:[27.195,48.966,25.011,13.120,22.547,6.089,45.203,250.550,64.675,43.813,308.663,74.184,0]
                },
                execution:{
                    ontop:{
                        naive:[7200.000,298.087,7200.000,0,0,0],
                        morphcsv:[112.916,53.845,71.614,2488.017,123.587,0]
                    },
                    mrdb:{
                  naive:[281.368,7200.000,154.894,642.866,0,149.255,2389.267,167.977,222.600,155.413,885.943,0],
                  morphcsv:[148.586,65.353,33.368,642.003,1128.371,8.296,2153.535,229.337,93.873,64.157,688.471,0]
                    }
                },
              },
                '360k':{
                load:{
                  naive:[289.196,289.196,289.196,289.196,289.196,289.196,289.196,289.196,289.196,289.196,289.196,289.196,0],
                  morphcsv:[76.631,114.769,75.506,58.399,65.133,38.908,90.176,597.318,156.083,89.746,723.698,163.574,0]
                },
                execution:{
                    ontop:{
                        naive:[3673.675,304.988,7200.000,0,0,0],
                        morphcsv:[220.704,84.674,127.462,7200.000,330.977,0]
                    },
                    mrdb:{
                  naive:[562.358,7200.000,295.243,1355.095,0,292.257,7200.000,336.069,417.233,301.886,7200.000,0],
                  morphcsv:[348.478,120.623,71.915,1395.604,0,32.415,7200.000,538.603,237.800,115.807,7200,0]
                    }
                },
              }            
        }
    },
    bio2rdf:{
      execution:{
          mrdb:{
              naive:{

              }
          }
      }
    }
  }
export {data, evaluation};