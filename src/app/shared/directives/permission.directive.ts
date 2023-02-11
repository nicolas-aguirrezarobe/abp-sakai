import { PermissionService } from "@abp/ng.core";
import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[grant]",
})
export class PermissionDirective {
    @Input("grant") permission: string;
    private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private permissionService: PermissionService) {}

  ngOnInit() {
    this.isGranted();
  }

  private isGranted() {
    console.log("directive excecuted");
    var result = this.permissionService.getGrantedPolicy(this.permission);
    if (result && !this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      } else if (!result && this.hasView) {
        this.viewContainer.clear();
        this.hasView = false;
      }
  }
}