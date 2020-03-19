// import { Item, Result } from './context';
import { Message, MessageFactory } from '../model/index'
import { module2 } from './mod2'
import { collectionOfPersonalInformationModule } from "./CollectionOfPersonalInformationModule"
import { useOfPersonalInformationModule } from "./useOfPersonalInformationModule"
import { disclosureOfPersonalInformationModule } from "./disclosureOfPersonalInformationModule"
import { retentionOfPersonalInformationAndSecurityModule } from "./retentionOfPersonalInformationAndSecurityModule"
import { privacyPolicyModule } from './privacyPolicyModule'
import { antiSpamModule } from './antiSpamModule'
import { privacyOfficerModule } from './privacyOfficerModule'
import { requestsForInformationModule } from './requestsForInformationModule'
import privacyIcon from "../Assets/img/privacy_ic.svg"
import privacyActiveIcon from "../Assets/img/privacy_ic_chat-active.svg"
import employIcon from "../Assets/img/Employ_ic.svg"
import employActiveIcon from "../Assets/img/Employ_ic_chat_active.svg"
import humanIcon from "../Assets/img/H_RIGHTS_ic.svg"
import humanActiveIcon from "../Assets/img/H_RIGHTS_ic_chat_active.svg"
import accessIcon from "../Assets/img/access_ic.svg"
import accessActiveIcon from "../Assets/img/access_ic_chat_active.svg"
import governmentIcon from "../Assets/img/gov_ic.svg"
import governmentActiveIcon from "../Assets/img/gov_ic_chat_active.svg"
import socialIcon from "../Assets/img/a_act_ic.svg"
import socialAcitveIcon from "../Assets/img/s_act_ic_chat_active.svg"

export interface SurveyDialogue {
    [key: number]: Message
}

export interface Module {
    name: string,
    modules?: { [key: number]: Module },
    nodes?: SurveyDialogue
}

export function getTopModules() {
    const modules = [
        {name: "Privacy & Confidentiality", defaultIcon: privacyIcon, activeIcon: privacyActiveIcon},
        {name: "Employment", defaultIcon: employIcon, activeIcon: employActiveIcon},
        {name: "Human Rights", defaultIcon: humanIcon, activeIcon: humanActiveIcon},
        {name: "Access to Records", defaultIcon: accessIcon, activeIcon: accessActiveIcon},
        {name: "Government", defaultIcon: governmentIcon, activeIcon: governmentActiveIcon},
        {name: "Societies Act Compliance", defaultIcon: socialIcon, activeIcon: socialAcitveIcon}
    ]
    return modules;
}

export function getSurvey() {
    let masterModule: any = []
    masterModule = masterModule.concat(
        privacyPolicyModule,
        collectionOfPersonalInformationModule,
        useOfPersonalInformationModule,
        disclosureOfPersonalInformationModule,
        retentionOfPersonalInformationAndSecurityModule,
        privacyOfficerModule,
        requestsForInformationModule,
        antiSpamModule)
    return generateSurveyDialogue(masterModule)
}

export function getModules() {
    const privacyPolicySurvey: SurveyDialogue = generateSurveyDialogue(privacyPolicyModule);
    const collectionOfPersonalInformationSurvey: SurveyDialogue = generateSurveyDialogue(collectionOfPersonalInformationModule);
    const useOfPersonalInformationSurvey: SurveyDialogue = generateSurveyDialogue(useOfPersonalInformationModule);
    const disclosureOfPersonalInformationSurvey: SurveyDialogue = generateSurveyDialogue(disclosureOfPersonalInformationModule);
    const retentionOfPersonalInformationAndSecuritySurvey: SurveyDialogue = generateSurveyDialogue(retentionOfPersonalInformationAndSecurityModule);
    const privacyOfficerSurvey: SurveyDialogue = generateSurveyDialogue(privacyOfficerModule) // module: 3  start qid 40 
    const requestsForInformationSurvey: SurveyDialogue = generateSurveyDialogue(requestsForInformationModule);
    const antiSpamSurvey: SurveyDialogue = generateSurveyDialogue(antiSpamModule);

    const modules: any = {
        1: { name: "Privacy Policy", nodes: privacyPolicySurvey},
        2: { name: "Collection of Personal Info", nodes: collectionOfPersonalInformationSurvey},
        3: { name: "Use of Personal Info", nodes: useOfPersonalInformationSurvey},
        4: { name: "Disclosure of Personal Info", nodes: disclosureOfPersonalInformationSurvey },
        5: { name: "Retention of Personal Info & Security", nodes: retentionOfPersonalInformationAndSecuritySurvey },
        6: { name: "Privacy Officer", nodes: privacyOfficerSurvey },
        7: { name: "Requests for Information", nodes: requestsForInformationSurvey },
        8: { name: "Anti Spam", nodes: antiSpamSurvey }
    }

    return modules

}

export function generateSurveyDialogue(moduleData: any) {
    let survey: SurveyDialogue = {}
    moduleData.forEach((question: any) => {
        try {
            let newMessage: Message = MessageFactory.createMessageFromData(question)
            survey[newMessage.id] = newMessage;
        } catch (error) {
            console.log("questionid failed to cast to Messagetype: " + question.id)
        }
    });
    return survey
}
