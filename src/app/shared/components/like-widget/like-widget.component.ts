import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-like-widget',
  template: './like-widget.component.html',
  styleUrls: ['like-widget.component.scss']
})

export class LikeWidgetComponent {
  @Output() public liked = new EventEmitter<void>();
  @Input() public likes = 0;
  @Input() public id = null;
}