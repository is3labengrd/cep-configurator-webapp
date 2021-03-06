import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms/';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { AddRuleComponent } from './add-rule/add-rule.component';
import { EditRuleComponent } from './edit-rule/edit-rule.component';
import { RuleDetailsComponent } from './rule-details/rule-details.component';
import { RuleService } from './rule.service';
import { AppRoutingModule } from './app-routing.module';
import { RulesComponent } from './rules/rules.component';
import { Rule } from './rule.model';
import { EnginesComponent } from './engines/engines.component';
import { EngineDetailsComponent } from './engine-details/engine-details.component';
import { AddEngineComponent } from './add-engine/add-engine.component';
import { LoginComponent } from './login/login.component';
import { ArchivedRulesComponent } from './archived-rules/archived-rules.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRuleComponent,
    EditRuleComponent,
    RuleDetailsComponent,
    RulesComponent,
    EnginesComponent,
    EngineDetailsComponent,
    AddEngineComponent,
    LoginComponent,
    ArchivedRulesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    OrderModule
  ],
  providers: [RuleService, Rule],
  bootstrap: [AppComponent]
})
export class AppModule {}
