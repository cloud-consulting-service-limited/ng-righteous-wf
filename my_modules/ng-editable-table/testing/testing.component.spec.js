import { async, TestBed } from '@angular/core/testing';
import { TestingComponent } from './testing.component';
import { EditableTableModule } from '../editable-table/editable-table.module';
describe('TestingComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TestingComponent],
            imports: [EditableTableModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TestingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=testing.component.spec.js.map