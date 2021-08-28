import { OnInit } from "@angular/core";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import UniqueIdService from "../../services/unique-id/unique-id.service";

@Component({
  selector: 'app-like-widget',
  template: './like-widget.component.html',
  styleUrls: ['like-widget.component.scss']
})

export class LikeWidgetComponent implements OnInit {
  @Output() public liked = new EventEmitter<void>();
  @Input() public likes = 0;
  @Input() public id = null;
  public fonts = { faThumbsUp };

  constructor(private uniqueIdService: UniqueIdService) {}

  public ngOnInit(): void {
    if (!this.id) {
      this.id = this.uniqueIdService.generateUniqueIdWithPrefix('like-widget')
    }
  }

  public like(): void {
    this.liked.emit();
  }
}