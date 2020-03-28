import { TestBed } from '@angular/core/testing';

import { AppDraggablePortletsTemplateService } from './app-draggable-portlets-template.service';

describe('AppDraggablePortletsTemplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppDraggablePortletsTemplateService = TestBed.get(AppDraggablePortletsTemplateService);
    expect(service).toBeTruthy();
  });
});
