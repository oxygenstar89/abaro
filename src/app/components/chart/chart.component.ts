import { AfterViewInit, Component, NgZone, OnDestroy, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSimilarPokemons } from '../../store/cards/cards.selector';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements AfterViewInit, OnDestroy {
  readonly zone = inject(NgZone);
  readonly store = inject(Store);
  private chartData: {type: string, value: number}[]= [];
  private subscriptions = new Subscription;
  similarPokemons$ = this.store.select(selectSimilarPokemons);

  ngAfterViewInit() {
      let root = am5.Root.new("chartdiv");

      root.setThemes([am5themes_Animated.new(root)]);

      let chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        paddingLeft:0,
        paddingRight:1
      }));

      chart.children.unshift(am5.Label.new(root, {
        text: "Occurrence of a given type",
        fontSize: 25,
        fontWeight: "500",
        textAlign: "center",
        x: am5.percent(50),
        centerX: am5.percent(50),
        paddingTop: 0,
        paddingBottom: 0
      }));


      let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
      cursor.lineY.set("visible", false);

      let xRenderer = am5xy.AxisRendererX.new(root, {
        minGridDistance: 30,
        minorGridEnabled: true
      });

      xRenderer.labels.template.setAll({
        rotation: -90,
        centerY: am5.p50,
        centerX: am5.p100,
        paddingRight: 15
      });

      xRenderer.grid.template.setAll({
        location: 1
      })

      let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "type",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {})
      }));

      let yRenderer = am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1
      })

      let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: yRenderer
      }));

      let series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        sequencedInterpolation: true,
        categoryXField: "type",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}"
        })
      }));

      series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
      series.columns.template.adapters.add("fill", function (fill, target) {
        return chart?.get("colors")?.getIndex(series.columns.indexOf(target));
      });

      series.columns.template.adapters.add("stroke", function (stroke, target) {
        return chart?.get("colors")?.getIndex(series.columns.indexOf(target));
      });

      xAxis.data.setAll(this.chartData);
      series.data.setAll(this.chartData);
      this.subscriptions.add(
        this.similarPokemons$.subscribe(
          poksy => {
            this.chartData = [];
            Object.keys(poksy).forEach(key => {
              if(poksy[key].length) {
                const value = poksy[key].length;
                this.chartData = [...this.chartData, {type: key, value: value + 50 }]
                xAxis.data.setAll(this.chartData);
                series.data.setAll(this.chartData);
              }
          });
          }
        )
      );

      series.appear(1000);
      chart.appear(1000, 100);

  }

  ngOnDestroy(): void {
      this.subscriptions.unsubscribe();
  }

}
