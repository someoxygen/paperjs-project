import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import paper from 'paper';

@Component({
  selector: 'app-drawing',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.css']
})
export class DrawingComponent implements AfterViewInit {
  
  @ViewChild('drawingCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  width: number = 500;
  height: number = 400;
  verticalCount: number = 2;
  horizontalCount: number = 2;
  profileWidth: number = 20;

  ngAfterViewInit(): void {
    paper.setup(this.canvasRef.nativeElement);
    this.drawFrame();
  }

  drawFrame(): void {
    paper.project.clear();
    let canvasCenter = paper.view.center;

    let frame = new paper.Path.Rectangle({
      point: [canvasCenter.x - this.width / 2, canvasCenter.y - this.height / 2],
      size: [this.width, this.height],
      strokeColor: 'black',
      strokeWidth: 2
    });

    let verticalSpacing = this.width / (this.verticalCount + 1);
    for (let i = 1; i <= this.verticalCount; i++) {
      let xPos = canvasCenter.x - this.width / 2 + verticalSpacing * i;
      new paper.Path.Line({
        from: [xPos, canvasCenter.y - this.height / 2],
        to: [xPos, canvasCenter.y + this.height / 2],
        strokeColor: 'blue',
        strokeWidth: this.profileWidth
      });
    }

    let horizontalSpacing = this.height / (this.horizontalCount + 1);
    for (let i = 1; i <= this.horizontalCount; i++) {
      let yPos = canvasCenter.y - this.height / 2 + horizontalSpacing * i;
      new paper.Path.Line({
        from: [canvasCenter.x - this.width / 2, yPos],
        to: [canvasCenter.x + this.width / 2, yPos],
        strokeColor: 'red',
        strokeWidth: this.profileWidth
      });
    }

    paper.view.update();
  }

  updateDrawing() {
    this.drawFrame();
  }
}
