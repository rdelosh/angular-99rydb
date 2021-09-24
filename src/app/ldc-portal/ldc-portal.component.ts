
import { Component, ViewChild, ComponentFactoryResolver, ApplicationRef, Injector, OnDestroy, Input, AfterViewInit } from '@angular/core';
import { CdkPortal, DomPortalHost } from '@angular/cdk/portal';

@Component({
  selector: 'ldc-portal',
  templateUrl: './ldc-portal.component.html',
})
export class LdcPortalComponent implements AfterViewInit, OnDestroy {

  @Input() idToRender: string;
  @ViewChild(CdkPortal) portal: CdkPortal;
  private externalWindow: Window = null;
  private host: DomPortalHost;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector,
  ) { }

  ngAfterViewInit() {

    this.host = new DomPortalHost(
      document.querySelector('#' + this.idToRender),
      this.componentFactoryResolver,
      this.applicationRef,
      this.injector
    );


    this.host.attach(this.portal);


  }
  ngOnDestroy() {
    this.host.detach();
  }

}
