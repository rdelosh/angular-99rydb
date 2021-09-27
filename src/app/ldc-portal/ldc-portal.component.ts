
import { Component, ViewChild, ComponentFactoryResolver, ApplicationRef, Injector, OnDestroy, Input, AfterViewInit, Inject } from '@angular/core';
import { CdkPortal, DomPortalHost, DomPortalOutlet } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ldc-portal',
  templateUrl: './ldc-portal.component.html',
})
export class LdcPortalComponent implements AfterViewInit, OnDestroy {

  @Input() idToRender: string;
  @ViewChild(CdkPortal) portal: CdkPortal;
  private externalWindow: Window = null;
  private host: DomPortalOutlet;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngAfterViewInit() {

    this.host = new DomPortalOutlet(
      this.document.getElementById('renderHere'),
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
