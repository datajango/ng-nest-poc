import { CoursesListPage } from './courses.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: CoursesListPage;

  beforeEach(() => {
    page = new CoursesListPage();
  });

  it('should display Courses message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Courses');    
  });

  it('should display Hello after Button is clicked', () => {
    page.navigateTo();
    page.clickButton();    
    expect(page.getTestText()).toEqual('Hello');    
    expect(page.getTestCount()).toEqual('1');    
    page.clickButton();    
    expect(page.getTestCount()).toEqual('2');    
    page.clickButton();    
    expect(page.getTestCount()).toEqual('3');    
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
