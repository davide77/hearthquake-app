import fetch from 'isomorphic-fetch';
import App from './App';
import stubbedResponses from '../../spec/helpers/stubbedResponses';
import fakeSetState from '../../spec/helpers/fakeSetState';
import expectedFormat from '../../spec/helpers/expectedFormat';
import { quakesEndpoint } from '../../src/config/endpoints';

let component;

describe('(Component) App', () => {
  beforeEach(() => {
    component = new App();
    spyOn(component, 'setState').and.callFake(fakeSetState).bind(component);
    spyOn(component, 'handleError').and.callThrough();
  });

  describe('(Scenario) before it loads', () => {
    it('it has an empty list of quakes', () => {
      expect(component.state).toEqual({ quakes: [] });
    });
  });

  describe('(Scenario) when it loads', () => {
    beforeEach((done) => {
      spyOn(global, 'fetch').and.returnValue(stubbedResponses.empty);
      component.componentDidMount();
      done();
    });

    it('it calls the earthquake API', () => {
      expect(global.fetch).toHaveBeenCalledWith(quakesEndpoint);
    });
  });

  describe('(Scenario) the earthquake API call fails', () => {
    beforeEach((done) => {
      spyOn(global, 'fetch').and.returnValue(stubbedResponses.failure);
      component.componentDidMount();
      done();
    });

    it('it logs the error', () => {
      expect(component.handleError).toHaveBeenCalledWith('{ERROR_RESPONSE}');
    });
  });

  describe('(Scenario) the earthquake API call returns successfully', () => {
    beforeEach((done) => {
      spyOn(global, 'fetch').and.returnValue(stubbedResponses.success);
      component.componentDidMount();
      done();
    });

    it('it populates the list of quakes', () => {
      expect(component.state.quakes).toEqual(expectedFormat);
    });
  });
});

