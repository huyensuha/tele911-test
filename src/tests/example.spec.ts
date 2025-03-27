import { test, expect } from '@playwright/test';
import { Pages } from '../../pages/pageController';


test('has title', async ({ page }, testInfo) => {
  testInfo.annotations.push({ type: "tag", description: "smoke" });

  const patientInfoPage = new Pages(page).getPatientInfoPage();
  await patientInfoPage.openPage("https://tele911-test.vsee.me/tele911_next/");
  // Expect a title "to contain" a substring.

});

