const Alexa = require('ask-sdk-core');

const DOCUMENT_ID_BIENVENIDO = "BienvenidoIntent";
const DOCUMENT_ID_COMIDA_TIPICA = "ComidaTipicaIntet";
const DOCUMENT_ID_DESCRIPCION = "DescripcionIntent";
const DOCUMENT_ID_LUGARES_TURISTICOS = "LugarTuristicosIntent";
const DOCUMENT_ID_MUSICA = "MusicaIntent";
const DOCUMENT_ID_PERSONAJES = "PersonajesIntent";
const DOCUMENT_ID_TRAJE_TIPICO = "TrajeTipicoInten";

const datasources = {
    bienvenido: {
        "headlineTemplateData": {
            "type": "object",
            "objectId": "headlineSample",
            "properties": {
                "backgroundImage": {
                    "contentDescription": null,
                    "smallSourceUrl": null,
                    "largeSourceUrl": null,
                    "sources": [
                        {
                            "url": "https://i.pinimg.com/564x/66/07/19/660719cf8690585cc21d2986ac4f9460.jpg",
                            "size": "large"
                        }
                    ]
                },
                "textContent": {
                    "primaryText": {
                        "type": "PlainText",
                        "text": "BIENVENIDOS AL MUNDO DE TAILANDIA"
                    }
                },
                "logoUrl": "https://i.pinimg.com/564x/84/e0/c9/84e0c958114d35d5346c97813a6a20b1.jpg",
                "hintText": ""
            }
        }
    },
    comidaTipica: {
        "imageListData": {
            "type": "object",
            "objectId": "imageListSample",
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://i.pinimg.com/564x/6c/26/c2/6c26c26867f816dd48e050c78a5dab6d.jpg",
                        "size": "large"
                    }
                ]
            },
            "title": "COMIDA TIPICA",
            "listItems": [
                {
                    "primaryText": "Pad Thai (ผัดไทย)",
                    "imageSource": "https://i.pinimg.com/564x/90/cc/11/90cc11be543cb98f07f25e990170af1d.jpg"
                },
                {
                    "primaryText": "Tom Yum Goong (ต้มยำกุ้ง)",
                    "imageSource": "https://i.pinimg.com/564x/11/69/e0/1169e035169f9976661546e559389be8.jpg"
                },
                {
                    "primaryText": "Som Tum (ส้มตำ)",
                    "imageSource": "https://i.pinimg.com/564x/6c/43/41/6c4341c0c20c0fd035a510623e08b80d.jpg"
                },
                {
                    "primaryText": "Massaman Curry (แกงมัสมั่น)",
                    "imageSource": "https://i.pinimg.com/564x/39/42/10/3942108f471a6007127bfe4ab6829166.jpg"
                },
                {
                    "primaryText": "Green Curry (แกงเขียวหวาน)",
                    "imageSource": "https://i.pinimg.com/564x/6c/43/dc/6c43dc8f674f1d28ee170e5752e4b23a.jpg"
                },
                {
                    "primaryText": "Khao Pad (ข้าวผัด)",
                    "imageSource": "https://i.pinimg.com/564x/68/d0/88/68d08817aa8f47b1520b8abf7cb458fd.jpg"
                }
            ],
            "logoUrl": "https://i.pinimg.com/564x/84/e0/c9/84e0c958114d35d5346c97813a6a20b1.jpg",
            "hintText": ""
        }
    },
    descripcion: {
        "videoPlayerTemplateData": {
            "type": "object",
            "properties": {
                "backgroundImage": "",
                "displayFullscreen": false,
                "headerTitle": "DESCRIPCION",
                "headerSubtitle": "",
                "logoUrl": "https://i.pinimg.com/564x/84/e0/c9/84e0c958114d35d5346c97813a6a20b1.jpg",
                "videoControlType": "skip",
                "videoSources": [
                    "https://www.dropbox.com/scl/fi/qd730bxx4s0yohijmqfl4/tailandia.mp4?rlkey=jaipzs5a0j8upceqh0eyhj59l&st=coz4bo59&dl=1"
                ],
                "sliderType": "determinate"
            }
        }
    },
    lugaresTuristicos: {
        "imageListData": {
            "type": "object",
            "objectId": "imageListSample",
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                        "size": "large"
                    }
                ]
            },
            "title": "Lugares turisticos",
            "listItems": [
                {
                    "primaryText": "Bangkok",
                    "imageSource": "https://i.pinimg.com/736x/5e/4b/d9/5e4bd9f8c2c19b638399845b9e938c3d.jpg"
                },
                {
                    "primaryText": "Chiang Mai",
                    "imageSource": "https://i.pinimg.com/564x/e7/47/a6/e747a6560fd7b28f2887bdb0b4531525.jpg"
                },
                {
                    "primaryText": "Phuket",
                    "imageSource": "https://i.pinimg.com/564x/fb/d0/fb/fbd0fb8f50a5b2748799c43d01f9e6e3.jpg"
                },
                {
                    "primaryText": "Ayutthaya",
                    "imageSource": "https://i.pinimg.com/564x/f8/08/c7/f808c7471a8dea07ffe2ddb5cbdc7a6b.jpg"
                }
            ],
            "logoUrl": "https://i.pinimg.com/564x/84/e0/c9/84e0c958114d35d5346c97813a6a20b1.jpg",
            "hintText": ""
        }
    },
    musica: {
        "audioPlayerTemplateData": {
            "type": "object",
            "properties": {
                "audioControlType": "jump10",
                "audioSources": [
                    "https://www.dropbox.com/scl/fi/gbw2g37kmp57k1p3oaft1/utomp3.com-Am-Fine-Official-MV.mp3?rlkey=d093sdwiwbp9h17m0ipsyawrp&st=p9w22yxx&dl=1"
                ],
                "backgroundImage": "https://i.pinimg.com/564x/5b/2d/67/5b2d6740e170059e0c8eee499d06c020.jpg",
                "coverImageSource": "https://i.pinimg.com/564x/53/77/eb/5377eb083850254baf1dad1ecf620dfb.jpg",
                "headerTitle": "MUSICA",
                "logoUrl": "https://i.pinimg.com/564x/84/e0/c9/84e0c958114d35d5346c97813a6a20b1.jpg",
                "primaryText": "เปลยนแฟนงายกวา Am Fine Official MV",
                "secondaryText": "Luk Thung (ลูกทุ่ง)",
                "sliderType": "determinate"
            }
        }
    },
    personajes: {
        "imageListData": {
            "type": "object",
            "objectId": "imageListSample",
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                        "size": "large"
                    }
                ]
            },
            "title": "PERSONAJES SOBRESALIENTES",
            "listItems": [
                {
                    "primaryText": "Rey Bhumibol Adulyadej (Rama IX)",
                    "imageSource": "https://i.pinimg.com/564x/04/6f/1c/046f1c7eb97783a08363286ffa9e698a.jpg"
                },
                {
                    "primaryText": "Reina Sirikit",
                    "imageSource": "https://i.pinimg.com/564x/d8/b9/03/d8b90342431596610b000dcaf4b433a6.jpg"
                },
                {
                    "primaryText": "Lisa Manoban",
                    "imageSource": "https://i.pinimg.com/736x/02/4b/2e/024b2e818aff67123ffff293ffb5e69c.jpg"
                }
            ],
            "logoUrl": "https://i.pinimg.com/564x/84/e0/c9/84e0c958114d35d5346c97813a6a20b1.jpg",
            "hintText": ""
        }
    },
    trajeTipico: {
        "imageListData": {
            "type": "object",
            "objectId": "imageListSample",
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                        "size": "large"
                    }
                ]
            },
            "title": "TRAJES TIPICOS",
            "listItems": [
                {
                    "primaryText": "Chut Thai Chakkri",
                    "imageSource": "https://i.pinimg.com/564x/48/a9/47/48a9479eaa7b0fafc14d286fce0f2beb.jpg"
                },
                {
                    "primaryText": "Chut Thai Boromphiman",
                    "imageSource": "https://i.pinimg.com/564x/3a/d1/b2/3ad1b297a69fc4d0fd72e032cdb1e7b6.jpg"
                },
                {
                    "primaryText": "Chut Thai Siwalai",
                    "imageSource": "https://i.pinimg.com/736x/2b/a8/02/2ba8028f3ee8731e3d46353a0ce267ae.jpg"
                }
            ],
            "logoUrl": "https://i.pinimg.com/564x/84/e0/c9/84e0c958114d35d5346c97813a6a20b1.jpg",
            "hintText": ""
        }
    }
};

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    };
};

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenido a la skill de Tailandia. Puedes preguntar sobre comida típica, lugares turísticos, y más.';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_BIENVENIDO, datasources.bienvenido);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hola Mundo!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const BienvenidoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'BienvenidoIntent';
    },
    handle(handlerInput) {
        const speakOutput = '¡Bienvenido al mundo de Tailandia!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .addDirective(createDirectivePayload(DOCUMENT_ID_BIENVENIDO, datasources.bienvenido))
            .getResponse();
    }
};

const ComidaTipicaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'ComidaTipicaIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'La comida típica de Tailandia incluye platos como Pad Thai, Tom Yum Goong, y Som Tum.';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_COMIDA_TIPICA, datasources.comidaTipica);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const DescripcionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'DescripcionIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Tailandia es conocida por sus templos budistas, playas tropicales y su deliciosa gastronomía.';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_DESCRIPCION, datasources.descripcion);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const LugarTuristicoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'LugarTuristicoIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Algunos lugares turísticos de Tailandia son Bangkok, Chiang Mai, y las islas Phi Phi.';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_LUGARES_TURISTICOS, datasources.lugaresTuristicos);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const MusicaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'MusicaIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Aquí tienes algo de música típica de Tailandia.';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_MUSICA, datasources.musica);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const PersonajesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'PersonajesIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Algunos personajes importantes de Tailandia son el rey Bhumibol Adulyadej, la Reina Sirikit, y Lisa Manoban.';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_PERSONAJES, datasources.personajes);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const TrajeTipicoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'TrajeTipicoIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'El traje típico de Tailandia incluye el Chut Thai, usado en ceremonias tradicionales y festivales.';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_TRAJE_TIPICO, datasources.trajeTipico);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Puedes preguntarme sobre comida típica, lugares turísticos, música y más.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent' ||
                Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Adiós!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Lo siento, no entiendo esa solicitud. Por favor, inténtalo de nuevo.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        return handlerInput.responseBuilder.getResponse();
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `Acabas de activar ${intentName}`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Lo siento, tuve problemas para hacer lo que me pediste. Por favor, inténtalo de nuevo.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        BienvenidoIntentHandler,
        ComidaTipicaIntentHandler,
        DescripcionIntentHandler,
        LugarTuristicoIntentHandler,
        MusicaIntentHandler,
        PersonajesIntentHandler,
        TrajeTipicoIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();
