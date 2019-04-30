import { browser, by, element } from 'protractor';

export class CoursesListPage {
  navigateTo() {
    return browser.get(browser.baseUrl+"/courses") as Promise<any>;
  }

  getTitleText() {
    return element(by.id('courseTitle')).getText() as Promise<string>;
  }

  clickButton() {
    element(by.id('testButton')).click();
  }

  getTestText() {
    return element(by.id('testText')).getText() as Promise<string>;
  }

  getTestCount() {
    return element(by.id('testCount')).getText() as Promise<string>;
  }

}
