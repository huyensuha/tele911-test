import { Page } from "@playwright/test";
import PatientInfoPage from "./remoteMedic/patientInfoPage";

export class Pages {
    static getPatientInfoPage(): PatientInfoPage {
        throw new Error('Method not implemented.');
    }

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getPatientInfoPage() {
        return new PatientInfoPage(this.page);
    }

}