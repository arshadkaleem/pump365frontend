/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
import { ApiResponse } from "@/type/apiResponse";
import {
  AddressCreateUpdateDTO,
  AddressDTO,
  AdminChangePasswordDTO,
  AssignEmployeeShiftDTO,
  AuditLogListAPIServiceResponse,
  AuthResponseDTO,
  BooleanAPIServiceResponse,
  BusinessKpiDTO,
  ChangePasswordDTO,
  CityDto,
  CustomerCreateDto,
  CustomerDtoAPIServiceResponse,
  CustomerDtoListAPIServiceResponse,
  CustomerInsightsDTO,
  CustomerUpdateDto,
  DailyRevenueDTO,
  DailySalesSummaryDTO,
  DistrictDto,
  EmployeeCreateDto,
  EmployeeDto,
  EmployeeShiftDTOListAPIServiceResponse,
  EmployeeUpdateDto,
  ForecastingDTO,
  FuelConsumptionForecastDtoAPIServiceResponse,
  FuelConsumptionRateDTO,
  FuelDeliveryCreateDto,
  FuelDeliveryLogDto,
  FuelDeliverySummaryDto,
  FuelDeliveryUpdateDto,
  FuelDispenserCreateDto,
  FuelDispenserUnitDto,
  FuelDispenserUpdateDto,
  FuelInventoryStatusDTO,
  FuelQualityCheckCreateDto,
  FuelQualityCheckDto,
  FuelQualityCheckUpdateDto,
  FuelTankCreateDto,
  FuelTankDto,
  FuelTankStockAdjustmentDto,
  FuelTankUpdateDto,
  FuelTypeSalesSummaryDTO,
  HourlySalesPatternDTO,
  InventoryDiscrepancyDtoListAPIServiceResponse,
  InventoryHistoryDtoAPIServiceResponse,
  InventoryReconciliationDtoAPIServiceResponse,
  InventoryTrendDTO,
  InventoryUpdateRequestDto,
  LoginDTO,
  LowStockAlertDtoListAPIServiceResponse,
  MaintenanceScheduleDto,
  NozzleCreateDto,
  NozzleDto,
  NozzleMaintenanceCreateDto,
  NozzleMaintenanceDto,
  NozzleMaintenanceUpdateDto,
  NozzlePerformanceDTO,
  NozzleReadingCreateDto,
  NozzleReadingDto,
  NozzleReadingSummaryDto,
  NozzleReadingUpdateDto,
  NozzleUpdateDto,
  OperationalSummaryDTO,
  PaymentMethodBreakdownDTO,
  PetrolPumpCreateDto,
  PetrolPumpDto,
  PricingCreateDto,
  PricingDto,
  PricingHistoryDto,
  PricingUpdateDto,
  ReconciliationRequestDto,
  RevenueSummaryDTO,
  ShiftCreateDTO,
  ShiftDTOAPIServiceResponse,
  ShiftDTOListAPIServiceResponse,
  ShiftPerformanceDTO,
  ShiftUpdateDTO,
  StockThresholdConfigDto,
  StringAPIServiceResponse,
  SupplierCreateDto,
  SupplierDto,
  SupplierUpdateDto,
  TopCustomerDTO,
  ValidateReadingRequestDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Address
   * @name AddressList
   * @request GET:/api/Address
   * @secure
   */
  addressList = (params: RequestParams = {}) =>
    this.request<AddressDTO[], any>({
      path: `/api/Address`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Address
   * @name AddressCreate
   * @request POST:/api/Address
   * @secure
   */
  addressCreate = (data: AddressCreateUpdateDTO, params: RequestParams = {}) =>
    this.request<AddressDTO, any>({
      path: `/api/Address`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Address
   * @name AddressDetail
   * @request GET:/api/Address/{id}
   * @secure
   */
  addressDetail = (id: string, params: RequestParams = {}) =>
    this.request<AddressDTO, any>({
      path: `/api/Address/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Address
   * @name AddressUpdate
   * @request PUT:/api/Address/{id}
   * @secure
   */
  addressUpdate = (
    id: string,
    data: AddressCreateUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/Address/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Address
   * @name AddressDelete
   * @request DELETE:/api/Address/{id}
   * @secure
   */
  addressDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Address/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags AuditLogs
   * @name AuditLogsEntityDetail
   * @request GET:/api/AuditLogs/entity/{tableName}/{recordId}
   * @secure
   */
  auditLogsEntityDetail = (
    tableName: string,
    recordId: string,
    query?: {
      /**
       * @format int32
       * @default 1
       */
      pageNumber?: number;
      /**
       * @format int32
       * @default 10
       */
      pageSize?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      AuditLogListAPIServiceResponse,
      AuditLogListAPIServiceResponse
    >({
      path: `/api/AuditLogs/entity/${tableName}/${recordId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags AuditLogs
   * @name AuditLogsUserDetail
   * @request GET:/api/AuditLogs/user/{userId}
   * @secure
   */
  auditLogsUserDetail = (
    userId: string,
    query?: {
      /**
       * @format int32
       * @default 1
       */
      pageNumber?: number;
      /**
       * @format int32
       * @default 10
       */
      pageSize?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      AuditLogListAPIServiceResponse,
      AuditLogListAPIServiceResponse
    >({
      path: `/api/AuditLogs/user/${userId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags AuditLogs
   * @name AuditLogsDateRangeList
   * @request GET:/api/AuditLogs/date-range
   * @secure
   */
  auditLogsDateRangeList = (
    query?: {
      /** @format date-time */
      startDate?: string;
      /** @format date-time */
      endDate?: string;
      /**
       * @format int32
       * @default 1
       */
      pageNumber?: number;
      /**
       * @format int32
       * @default 10
       */
      pageSize?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      AuditLogListAPIServiceResponse,
      AuditLogListAPIServiceResponse
    >({
      path: `/api/AuditLogs/date-range`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthLoginCreate
   * @request POST:/api/Auth/login
   * @secure
   */
  authLoginCreate = (data: LoginDTO, params: RequestParams = {}) =>
    this.request<AuthResponseDTO, any>({
      path: `/api/Auth/login`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthChangePasswordCreate
   * @request POST:/api/Auth/change-password
   * @secure
   */
  authChangePasswordCreate = (
    data: ChangePasswordDTO,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/Auth/change-password`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthAdminChangePasswordCreate
   * @request POST:/api/Auth/admin/change-password
   * @secure
   */
  authAdminChangePasswordCreate = (
    data: AdminChangePasswordDTO,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/Auth/admin/change-password`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Cities
   * @name CitiesList
   * @request GET:/api/Cities
   * @secure
   */
  citiesList = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Cities`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Cities
   * @name CitiesCreate
   * @request POST:/api/Cities
   * @secure
   */
  citiesCreate = (data: CityDto, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Cities`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Cities
   * @name CitiesDetail
   * @request GET:/api/Cities/{id}
   * @secure
   */
  citiesDetail = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Cities/${id}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Cities
   * @name CitiesUpdate
   * @request PUT:/api/Cities/{id}
   * @secure
   */
  citiesUpdate = (id: string, data: CityDto, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Cities/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Cities
   * @name CitiesDelete
   * @request DELETE:/api/Cities/{id}
   * @secure
   */
  citiesDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Cities/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Customers
   * @name CustomersList
   * @request GET:/api/Customers
   * @secure
   */
  customersList = (params: RequestParams = {}) =>
    this.request<CustomerDtoListAPIServiceResponse, any>({
      path: `/api/Customers`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customers
   * @name CustomersCreate
   * @request POST:/api/Customers
   * @secure
   */
  customersCreate = (data: CustomerCreateDto, params: RequestParams = {}) =>
    this.request<CustomerDtoAPIServiceResponse, any>({
      path: `/api/Customers`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customers
   * @name CustomersByPumpList
   * @request GET:/api/Customers/ByPump
   * @secure
   */
  customersByPumpList = (params: RequestParams = {}) =>
    this.request<CustomerDtoListAPIServiceResponse, any>({
      path: `/api/Customers/ByPump`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customers
   * @name CustomersByPumpDetail
   * @request GET:/api/Customers/ByPump/{pumpId}
   * @secure
   */
  customersByPumpDetail = (pumpId: string, params: RequestParams = {}) =>
    this.request<CustomerDtoListAPIServiceResponse, any>({
      path: `/api/Customers/ByPump/${pumpId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customers
   * @name CustomersDetail
   * @request GET:/api/Customers/{id}
   * @secure
   */
  customersDetail = (id: string, params: RequestParams = {}) =>
    this.request<CustomerDtoAPIServiceResponse, any>({
      path: `/api/Customers/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customers
   * @name CustomersUpdate
   * @request PUT:/api/Customers/{id}
   * @secure
   */
  customersUpdate = (
    id: string,
    data: CustomerUpdateDto,
    params: RequestParams = {}
  ) =>
    this.request<BooleanAPIServiceResponse, any>({
      path: `/api/Customers/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customers
   * @name CustomersDelete
   * @request DELETE:/api/Customers/{id}
   * @secure
   */
  customersDelete = (id: string, params: RequestParams = {}) =>
    this.request<BooleanAPIServiceResponse, any>({
      path: `/api/Customers/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customers
   * @name CustomersPhoneDetail
   * @request GET:/api/Customers/Phone/{phone}
   * @secure
   */
  customersPhoneDetail = (phone: string, params: RequestParams = {}) =>
    this.request<CustomerDtoAPIServiceResponse, any>({
      path: `/api/Customers/Phone/${phone}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customers
   * @name CustomersLoyaltyPointsPartialUpdate
   * @request PATCH:/api/Customers/{id}/LoyaltyPoints
   * @secure
   */
  customersLoyaltyPointsPartialUpdate = (
    id: string,
    data: number,
    params: RequestParams = {}
  ) =>
    this.request<BooleanAPIServiceResponse, any>({
      path: `/api/Customers/${id}/LoyaltyPoints`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dashboard
   * @name DashboardSalesDailyList
   * @request GET:/api/Dashboard/sales/daily
   * @secure
   */
  dashboardSalesDailyList = (
    query?: {
      /** @format date-time */
      date?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<DailySalesSummaryDTO, any>({
      path: `/api/Dashboard/sales/daily`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dashboard
   * @name DashboardSalesTrendList
   * @request GET:/api/Dashboard/sales/trend
   * @secure
   */
  dashboardSalesTrendList = (
    query?: {
      /** @format date-time */
      startDate?: string;
      /** @format date-time */
      endDate?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<DailySalesSummaryDTO, any>({
      path: `/api/Dashboard/sales/trend`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dashboard
   * @name DashboardSalesByFuelTypeList
   * @request GET:/api/Dashboard/sales/by-fuel-type
   * @secure
   */
  dashboardSalesByFuelTypeList = (
    query?: {
      /** @format date-time */
      startDate?: string;
      /** @format date-time */
      endDate?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<FuelTypeSalesSummaryDTO, any>({
      path: `/api/Dashboard/sales/by-fuel-type`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dashboard
   * @name DashboardSalesHourlyPatternList
   * @request GET:/api/Dashboard/sales/hourly-pattern
   * @secure
   */
  dashboardSalesHourlyPatternList = (
    query?: {
      /** @format date-time */
      date?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<HourlySalesPatternDTO, any>({
      path: `/api/Dashboard/sales/hourly-pattern`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dashboard
   * @name DashboardInventoryStatusList
   * @request GET:/api/Dashboard/inventory/status
   * @secure
   */
  dashboardInventoryStatusList = (params: RequestParams = {}) =>
    this.request<FuelInventoryStatusDTO, any>({
      path: `/api/Dashboard/inventory/status`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dashboard
   * @name DashboardInventoryTrendList
   * @request GET:/api/Dashboard/inventory/trend
   * @secure
   */
  dashboardInventoryTrendList = (
    query?: {
      /** @format date-time */
      startDate?: string;
      /** @format date-time */
      endDate?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<InventoryTrendDTO, any>({
      path: `/api/Dashboard/inventory/trend`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dashboard
   * @name DashboardInventoryConsumptionRatesList
   * @request GET:/api/Dashboard/inventory/consumption-rates
   * @secure
   */
  dashboardInventoryConsumptionRatesList = (
    query?: {
      /**
       * @format int32
       * @default 30
       */
      days?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<FuelConsumptionRateDTO, any>({
      path: `/api/Dashboard/inventory/consumption-rates`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dashboard
   * @name DashboardFinanceRevenueSummaryList
   * @request GET:/api/Dashboard/finance/revenue-summary
   * @secure
   */
  dashboardFinanceRevenueSummaryList = (
    query?: {
      /** @format date-time */
      startDate?: string;
      /** @format date-time */
      endDate?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<RevenueSummaryDTO, any>({
      path: `/api/Dashboard/finance/revenue-summary`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dashboard
   * @name DashboardFinancePaymentMethodsList
   * @request GET:/api/Dashboard/finance/payment-methods
   * @secure
   */
  dashboardFinancePaymentMethodsList = (
    query?: {
      /** @format date-time */
      startDate?: string;
      /** @format date-time */
      endDate?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<PaymentMethodBreakdownDTO, any>({
      path: `/api/Dashboard/finance/payment-methods`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dashboard
   * @name DashboardFinanceDailyRevenueList
   * @request GET:/api/Dashboard/finance/daily-revenue
   * @secure
   */
  dashboardFinanceDailyRevenueList = (
    query?: {
      /** @format date-time */
      startDate?: string;
      /** @format date-time */
      endDate?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<DailyRevenueDTO, any>({
      path: `/api/Dashboard/finance/daily-revenue`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dashboard
   * @name DashboardOperationsSummaryList
   * @request GET:/api/Dashboard/operations/summary
   * @secure
   */
  dashboardOperationsSummaryList = (
    query?: {
      /** @format date-time */
      date?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OperationalSummaryDTO, any>({
      path: `/api/Dashboard/operations/summary`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dashboard
   * @name DashboardOperationsNozzlePerformanceList
   * @request GET:/api/Dashboard/operations/nozzle-performance
   * @secure
   */
  dashboardOperationsNozzlePerformanceList = (
    query?: {
      /** @format date-time */
      startDate?: string;
      /** @format date-time */
      endDate?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<NozzlePerformanceDTO, any>({
      path: `/api/Dashboard/operations/nozzle-performance`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dashboard
   * @name DashboardOperationsShiftPerformanceList
   * @request GET:/api/Dashboard/operations/shift-performance
   * @secure
   */
  dashboardOperationsShiftPerformanceList = (
    query?: {
      /** @format date-time */
      startDate?: string;
      /** @format date-time */
      endDate?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ShiftPerformanceDTO, any>({
      path: `/api/Dashboard/operations/shift-performance`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dashboard
   * @name DashboardCustomersInsightsList
   * @request GET:/api/Dashboard/customers/insights
   * @secure
   */
  dashboardCustomersInsightsList = (
    query?: {
      /** @format date-time */
      startDate?: string;
      /** @format date-time */
      endDate?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<CustomerInsightsDTO, any>({
      path: `/api/Dashboard/customers/insights`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dashboard
   * @name DashboardCustomersTopList
   * @request GET:/api/Dashboard/customers/top
   * @secure
   */
  dashboardCustomersTopList = (
    query?: {
      /**
       * @format int32
       * @default 10
       */
      count?: number;
      /** @format date-time */
      startDate?: string;
      /** @format date-time */
      endDate?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<TopCustomerDTO, any>({
      path: `/api/Dashboard/customers/top`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dashboard
   * @name DashboardBusinessKpiList
   * @request GET:/api/Dashboard/business/kpi
   * @secure
   */
  dashboardBusinessKpiList = (
    query?: {
      /** @format date-time */
      startDate?: string;
      /** @format date-time */
      endDate?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<BusinessKpiDTO, any>({
      path: `/api/Dashboard/business/kpi`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dashboard
   * @name DashboardBusinessForecastList
   * @request GET:/api/Dashboard/business/forecast
   * @secure
   */
  dashboardBusinessForecastList = (
    query?: {
      /**
       * @format int32
       * @default 30
       */
      forecastDays?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<ForecastingDTO, any>({
      path: `/api/Dashboard/business/forecast`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Districts
   * @name DistrictsByStateDetail
   * @request GET:/api/Districts/ByState/{stateId}
   * @secure
   */
  districtsByStateDetail = (stateId: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Districts/ByState/${stateId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Districts
   * @name DistrictsDetail
   * @request GET:/api/Districts/{id}
   * @secure
   */
  districtsDetail = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Districts/${id}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Districts
   * @name DistrictsUpdate
   * @request PUT:/api/Districts/{id}
   * @secure
   */
  districtsUpdate = (
    id: string,
    data: DistrictDto,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/Districts/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Districts
   * @name DistrictsDelete
   * @request DELETE:/api/Districts/{id}
   * @secure
   */
  districtsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Districts/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Districts
   * @name DistrictsCreate
   * @request POST:/api/Districts
   * @secure
   */
  districtsCreate = (data: DistrictDto, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Districts`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Employee
   * @name EmployeeList
   * @request GET:/api/Employee
   * @secure
   */
  employeeList = (params: RequestParams = {}) =>
    this.request<APIServiceResponse<EmployeeDto[]>, any>({
      path: `/api/Employee`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Employee
   * @name EmployeeCreate
   * @request POST:/api/Employee
   * @secure
   */
  employeeCreate = (data: EmployeeCreateDto, params: RequestParams = {}) =>
    this.request<EmployeeDto, any>({
      path: `/api/Employee`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Employee
   * @name EmployeeDetail
   * @request GET:/api/Employee/{id}
   * @secure
   */
  employeeDetail = (id: string, params: RequestParams = {}) =>
    this.request<EmployeeDto, any>({
      path: `/api/Employee/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Employee
   * @name EmployeeUpdate
   * @request PUT:/api/Employee/{id}
   * @secure
   */
  employeeUpdate = (
    id: string,
    data: EmployeeUpdateDto,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/Employee/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Employee
   * @name EmployeeDelete
   * @request DELETE:/api/Employee/{id}
   * @secure
   */
  employeeDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Employee/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Employee
   * @name EmployeeByRoleDetail
   * @request GET:/api/Employee/ByRole/{role}
   * @secure
   */
  employeeByRoleDetail = (role: string, params: RequestParams = {}) =>
    this.request<EmployeeDto[], any>({
      path: `/api/Employee/ByRole/${role}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Employee
   * @name EmployeeCurrentList
   * @request GET:/api/Employee/Current
   * @secure
   */
  employeeCurrentList = (params: RequestParams = {}) =>
    this.request<EmployeeDto, any>({
      path: `/api/Employee/Current`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags EmployeeShift
   * @name EmployeeShiftAssignCreate
   * @request POST:/api/EmployeeShift/assign
   * @secure
   */
  employeeShiftAssignCreate = (
    data: AssignEmployeeShiftDTO,
    params: RequestParams = {}
  ) =>
    this.request<StringAPIServiceResponse, any>({
      path: `/api/EmployeeShift/assign`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags EmployeeShift
   * @name EmployeeShiftShiftDetail
   * @request GET:/api/EmployeeShift/shift/{shiftId}
   * @secure
   */
  employeeShiftShiftDetail = (shiftId: string, params: RequestParams = {}) =>
    this.request<EmployeeShiftDTOListAPIServiceResponse, any>({
      path: `/api/EmployeeShift/shift/${shiftId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags EmployeeShift
   * @name EmployeeShiftDelete
   * @request DELETE:/api/EmployeeShift/{id}
   * @secure
   */
  employeeShiftDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/EmployeeShift/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags EnhancedFuelInventory
   * @name EnhancedFuelInventoryLowStockAlertsList
   * @request GET:/api/EnhancedFuelInventory/low-stock-alerts
   * @secure
   */
  enhancedFuelInventoryLowStockAlertsList = (params: RequestParams = {}) =>
    this.request<LowStockAlertDtoListAPIServiceResponse, any>({
      path: `/api/EnhancedFuelInventory/low-stock-alerts`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags EnhancedFuelInventory
   * @name EnhancedFuelInventoryConfigureThresholdsCreate
   * @request POST:/api/EnhancedFuelInventory/configure-thresholds
   * @secure
   */
  enhancedFuelInventoryConfigureThresholdsCreate = (
    data: StockThresholdConfigDto,
    params: RequestParams = {}
  ) =>
    this.request<BooleanAPIServiceResponse, any>({
      path: `/api/EnhancedFuelInventory/configure-thresholds`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags EnhancedFuelInventory
   * @name EnhancedFuelInventoryConsumptionForecastDetail
   * @request GET:/api/EnhancedFuelInventory/consumption-forecast/{tankId}/{days}
   * @secure
   */
  enhancedFuelInventoryConsumptionForecastDetail = (
    tankId: string,
    days: number,
    params: RequestParams = {}
  ) =>
    this.request<FuelConsumptionForecastDtoAPIServiceResponse, any>({
      path: `/api/EnhancedFuelInventory/consumption-forecast/${tankId}/${days}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags EnhancedFuelInventory
   * @name EnhancedFuelInventoryDiscrepanciesList
   * @request GET:/api/EnhancedFuelInventory/discrepancies
   * @secure
   */
  enhancedFuelInventoryDiscrepanciesList = (
    query?: {
      /** @format date-time */
      startDate?: string;
      /** @format date-time */
      endDate?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<InventoryDiscrepancyDtoListAPIServiceResponse, any>({
      path: `/api/EnhancedFuelInventory/discrepancies`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags EnhancedFuelInventory
   * @name EnhancedFuelInventoryReconcileCreate
   * @request POST:/api/EnhancedFuelInventory/reconcile
   * @secure
   */
  enhancedFuelInventoryReconcileCreate = (
    data: ReconciliationRequestDto,
    params: RequestParams = {}
  ) =>
    this.request<InventoryReconciliationDtoAPIServiceResponse, any>({
      path: `/api/EnhancedFuelInventory/reconcile`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags EnhancedFuelInventory
   * @name EnhancedFuelInventoryHistoryDetail
   * @request GET:/api/EnhancedFuelInventory/history/{tankId}
   * @secure
   */
  enhancedFuelInventoryHistoryDetail = (
    tankId: string,
    query?: {
      /** @format date-time */
      startDate?: string;
      /** @format date-time */
      endDate?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<InventoryHistoryDtoAPIServiceResponse, any>({
      path: `/api/EnhancedFuelInventory/history/${tankId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags EnhancedFuelInventory
   * @name EnhancedFuelInventoryUpdateAfterSaleCreate
   * @request POST:/api/EnhancedFuelInventory/update-after-sale
   * @secure
   */
  enhancedFuelInventoryUpdateAfterSaleCreate = (
    data: InventoryUpdateRequestDto,
    params: RequestParams = {}
  ) =>
    this.request<BooleanAPIServiceResponse, any>({
      path: `/api/EnhancedFuelInventory/update-after-sale`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags EnhancedFuelInventory
   * @name EnhancedFuelInventoryUpdateAfterDeliveryCreate
   * @request POST:/api/EnhancedFuelInventory/update-after-delivery
   * @secure
   */
  enhancedFuelInventoryUpdateAfterDeliveryCreate = (
    data: InventoryUpdateRequestDto,
    params: RequestParams = {}
  ) =>
    this.request<BooleanAPIServiceResponse, any>({
      path: `/api/EnhancedFuelInventory/update-after-delivery`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelDelivery
   * @name FuelDeliveryList
   * @request GET:/api/FuelDelivery
   * @secure
   */
  fuelDeliveryList = (params: RequestParams = {}) =>
    this.request<FuelDeliveryLogDto[], any>({
      path: `/api/FuelDelivery`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelDelivery
   * @name FuelDeliveryCreate
   * @request POST:/api/FuelDelivery
   * @secure
   */
  fuelDeliveryCreate = (
    data: FuelDeliveryCreateDto,
    params: RequestParams = {}
  ) =>
    this.request<FuelDeliveryLogDto, any>({
      path: `/api/FuelDelivery`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelDelivery
   * @name FuelDeliveryByPumpList
   * @request GET:/api/FuelDelivery/ByPump
   * @secure
   */
  fuelDeliveryByPumpList = (params: RequestParams = {}) =>
    this.request<FuelDeliveryLogDto[], any>({
      path: `/api/FuelDelivery/ByPump`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelDelivery
   * @name FuelDeliveryByPumpDetail
   * @request GET:/api/FuelDelivery/ByPump/{pumpId}
   * @secure
   */
  fuelDeliveryByPumpDetail = (pumpId: string, params: RequestParams = {}) =>
    this.request<FuelDeliveryLogDto[], any>({
      path: `/api/FuelDelivery/ByPump/${pumpId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelDelivery
   * @name FuelDeliveryDetail
   * @request GET:/api/FuelDelivery/{id}
   * @secure
   */
  fuelDeliveryDetail = (id: string, params: RequestParams = {}) =>
    this.request<FuelDeliveryLogDto, any>({
      path: `/api/FuelDelivery/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelDelivery
   * @name FuelDeliveryUpdate
   * @request PUT:/api/FuelDelivery/{id}
   * @secure
   */
  fuelDeliveryUpdate = (
    id: string,
    data: FuelDeliveryUpdateDto,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/FuelDelivery/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelDelivery
   * @name FuelDeliveryDelete
   * @request DELETE:/api/FuelDelivery/{id}
   * @secure
   */
  fuelDeliveryDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/FuelDelivery/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelDelivery
   * @name FuelDeliveryByTankDetail
   * @request GET:/api/FuelDelivery/ByTank/{tankId}
   * @secure
   */
  fuelDeliveryByTankDetail = (tankId: string, params: RequestParams = {}) =>
    this.request<FuelDeliveryLogDto[], any>({
      path: `/api/FuelDelivery/ByTank/${tankId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelDelivery
   * @name FuelDeliveryBySupplierDetail
   * @request GET:/api/FuelDelivery/BySupplier/{supplierId}
   * @secure
   */
  fuelDeliveryBySupplierDetail = (
    supplierId: string,
    params: RequestParams = {}
  ) =>
    this.request<FuelDeliveryLogDto[], any>({
      path: `/api/FuelDelivery/BySupplier/${supplierId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelDelivery
   * @name FuelDeliveryByDateRangeList
   * @request GET:/api/FuelDelivery/ByDateRange
   * @secure
   */
  fuelDeliveryByDateRangeList = (
    query?: {
      /** @format date-time */
      startDate?: string;
      /** @format date-time */
      endDate?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<FuelDeliveryLogDto[], any>({
      path: `/api/FuelDelivery/ByDateRange`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelDelivery
   * @name FuelDeliveryByInvoiceDetail
   * @request GET:/api/FuelDelivery/ByInvoice/{invoiceNumber}
   * @secure
   */
  fuelDeliveryByInvoiceDetail = (
    invoiceNumber: string,
    params: RequestParams = {}
  ) =>
    this.request<FuelDeliveryLogDto, any>({
      path: `/api/FuelDelivery/ByInvoice/${invoiceNumber}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelDelivery
   * @name FuelDeliveryCheckInvoiceDetail
   * @request GET:/api/FuelDelivery/CheckInvoice/{invoiceNumber}
   * @secure
   */
  fuelDeliveryCheckInvoiceDetail = (
    invoiceNumber: string,
    params: RequestParams = {}
  ) =>
    this.request<boolean, any>({
      path: `/api/FuelDelivery/CheckInvoice/${invoiceNumber}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelDelivery
   * @name FuelDeliverySummaryList
   * @request GET:/api/FuelDelivery/Summary
   * @secure
   */
  fuelDeliverySummaryList = (
    query?: {
      fuelType?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<FuelDeliverySummaryDto[], any>({
      path: `/api/FuelDelivery/Summary`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelDispenser
   * @name FuelDispenserList
   * @request GET:/api/FuelDispenser
   * @secure
   */
  fuelDispenserList = (params: RequestParams = {}) =>
    this.request<FuelDispenserUnitDto[], any>({
      path: `/api/FuelDispenser`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelDispenser
   * @name FuelDispenserCreate
   * @request POST:/api/FuelDispenser
   * @secure
   */
  fuelDispenserCreate = (
    data: FuelDispenserCreateDto,
    params: RequestParams = {}
  ) =>
    this.request<FuelDispenserUnitDto, any>({
      path: `/api/FuelDispenser`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelDispenser
   * @name FuelDispenserUpdate
   * @request PUT:/api/FuelDispenser
   * @secure
   */
  fuelDispenserUpdate = (
    data: FuelDispenserUpdateDto,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/FuelDispenser`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelDispenser
   * @name FuelDispenserDetail
   * @request GET:/api/FuelDispenser/{id}
   * @secure
   */
  fuelDispenserDetail = (id: string, params: RequestParams = {}) =>
    this.request<FuelDispenserUnitDto, any>({
      path: `/api/FuelDispenser/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelDispenser
   * @name FuelDispenserDelete
   * @request DELETE:/api/FuelDispenser/{id}
   * @secure
   */
  fuelDispenserDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/FuelDispenser/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelDispenser
   * @name FuelDispenserByTankDetail
   * @request GET:/api/FuelDispenser/ByTank/{tankId}
   * @secure
   */
  fuelDispenserByTankDetail = (tankId: string, params: RequestParams = {}) =>
    this.request<FuelDispenserUnitDto[], any>({
      path: `/api/FuelDispenser/ByTank/${tankId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelQualityCheck
   * @name FuelQualityCheckList
   * @request GET:/api/FuelQualityCheck
   * @secure
   */
  fuelQualityCheckList = (params: RequestParams = {}) =>
    this.request<FuelQualityCheckDto[], any>({
      path: `/api/FuelQualityCheck`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelQualityCheck
   * @name FuelQualityCheckCreate
   * @request POST:/api/FuelQualityCheck
   * @secure
   */
  fuelQualityCheckCreate = (
    data: FuelQualityCheckCreateDto,
    params: RequestParams = {}
  ) =>
    this.request<FuelQualityCheckDto, any>({
      path: `/api/FuelQualityCheck`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelQualityCheck
   * @name FuelQualityCheckDetail
   * @request GET:/api/FuelQualityCheck/{id}
   * @secure
   */
  fuelQualityCheckDetail = (id: string, params: RequestParams = {}) =>
    this.request<FuelQualityCheckDto, any>({
      path: `/api/FuelQualityCheck/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelQualityCheck
   * @name FuelQualityCheckUpdate
   * @request PUT:/api/FuelQualityCheck/{id}
   * @secure
   */
  fuelQualityCheckUpdate = (
    id: string,
    data: FuelQualityCheckUpdateDto,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/FuelQualityCheck/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelQualityCheck
   * @name FuelQualityCheckDelete
   * @request DELETE:/api/FuelQualityCheck/{id}
   * @secure
   */
  fuelQualityCheckDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/FuelQualityCheck/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelQualityCheck
   * @name FuelQualityCheckByTankDetail
   * @request GET:/api/FuelQualityCheck/ByTank/{tankId}
   * @secure
   */
  fuelQualityCheckByTankDetail = (tankId: string, params: RequestParams = {}) =>
    this.request<FuelQualityCheckDto[], any>({
      path: `/api/FuelQualityCheck/ByTank/${tankId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelQualityCheck
   * @name FuelQualityCheckByStatusDetail
   * @request GET:/api/FuelQualityCheck/ByStatus/{status}
   * @secure
   */
  fuelQualityCheckByStatusDetail = (
    status: string,
    params: RequestParams = {}
  ) =>
    this.request<FuelQualityCheckDto[], any>({
      path: `/api/FuelQualityCheck/ByStatus/${status}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelQualityCheck
   * @name FuelQualityCheckPendingList
   * @request GET:/api/FuelQualityCheck/Pending
   * @secure
   */
  fuelQualityCheckPendingList = (params: RequestParams = {}) =>
    this.request<FuelQualityCheckDto[], any>({
      path: `/api/FuelQualityCheck/Pending`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelQualityCheck
   * @name FuelQualityCheckApprovePartialUpdate
   * @request PATCH:/api/FuelQualityCheck/{id}/Approve
   * @secure
   */
  fuelQualityCheckApprovePartialUpdate = (
    id: string,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/FuelQualityCheck/${id}/Approve`,
      method: "PATCH",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelTank
   * @name FuelTankList
   * @request GET:/api/FuelTank
   * @secure
   */
  fuelTankList = (params: RequestParams = {}) =>
    this.request<APIServiceResponse<FuelTankDto[]>, any>({
      path: `/api/FuelTank`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelTank
   * @name FuelTankCreate
   * @request POST:/api/FuelTank
   * @secure
   */
  fuelTankCreate = (data: FuelTankCreateDto, params: RequestParams = {}) =>
    this.request<FuelTankDto, any>({
      path: `/api/FuelTank`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelTank
   * @name FuelTankDetail
   * @request GET:/api/FuelTank/{id}
   * @secure
   */
  fuelTankDetail = (id: string, params: RequestParams = {}) =>
    this.request<FuelTankDto, any>({
      path: `/api/FuelTank/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelTank
   * @name FuelTankUpdate
   * @request PUT:/api/FuelTank/{id}
   * @secure
   */
  fuelTankUpdate = (
    id: string,
    data: FuelTankUpdateDto,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/FuelTank/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelTank
   * @name FuelTankDelete
   * @request DELETE:/api/FuelTank/{id}
   * @secure
   */
  fuelTankDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/FuelTank/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelTank
   * @name FuelTankByTypeDetail
   * @request GET:/api/FuelTank/ByType/{fuelType}
   * @secure
   */
  fuelTankByTypeDetail = (fuelType: string, params: RequestParams = {}) =>
    this.request<FuelTankDto[], any>({
      path: `/api/FuelTank/ByType/${fuelType}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FuelTank
   * @name FuelTankAdjustStockCreate
   * @request POST:/api/FuelTank/AdjustStock
   * @secure
   */
  fuelTankAdjustStockCreate = (
    data: FuelTankStockAdjustmentDto,
    params: RequestParams = {}
  ) =>
    this.request<FuelTankDto, any>({
      path: `/api/FuelTank/AdjustStock`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Nozzle
   * @name NozzleList
   * @request GET:/api/Nozzle
   * @secure
   */
  nozzleList = (params: RequestParams = {}) =>
    this.request<NozzleDto[], any>({
      path: `/api/Nozzle`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Nozzle
   * @name NozzleCreate
   * @request POST:/api/Nozzle
   * @secure
   */
  nozzleCreate = (data: NozzleCreateDto, params: RequestParams = {}) =>
    this.request<NozzleDto, any>({
      path: `/api/Nozzle`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Nozzle
   * @name NozzleUpdate
   * @request PUT:/api/Nozzle
   * @secure
   */
  nozzleUpdate = (data: NozzleUpdateDto, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Nozzle`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Nozzle
   * @name NozzleDispenserDetail
   * @request GET:/api/Nozzle/dispenser/{dispenserId}
   * @secure
   */
  nozzleDispenserDetail = (dispenserId: string, params: RequestParams = {}) =>
    this.request<NozzleDto[], any>({
      path: `/api/Nozzle/dispenser/${dispenserId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Nozzle
   * @name NozzleDetail
   * @request GET:/api/Nozzle/{id}
   * @secure
   */
  nozzleDetail = (id: string, params: RequestParams = {}) =>
    this.request<NozzleDto, any>({
      path: `/api/Nozzle/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Nozzle
   * @name NozzleDelete
   * @request DELETE:/api/Nozzle/{id}
   * @secure
   */
  nozzleDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Nozzle/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Nozzle
   * @name NozzleValidateDetail
   * @request GET:/api/Nozzle/validate/{dispenserId}/{nozzleNumber}
   * @secure
   */
  nozzleValidateDetail = (
    dispenserId: string,
    nozzleNumber: number,
    query?: {
      /** @format uuid */
      excludeNozzleId?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<boolean, any>({
      path: `/api/Nozzle/validate/${dispenserId}/${nozzleNumber}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags NozzleMaintenance
   * @name NozzleMaintenanceList
   * @request GET:/api/NozzleMaintenance
   * @secure
   */
  nozzleMaintenanceList = (params: RequestParams = {}) =>
    this.request<NozzleMaintenanceDto[], any>({
      path: `/api/NozzleMaintenance`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags NozzleMaintenance
   * @name NozzleMaintenanceCreate
   * @request POST:/api/NozzleMaintenance
   * @secure
   */
  nozzleMaintenanceCreate = (
    data: NozzleMaintenanceCreateDto,
    params: RequestParams = {}
  ) =>
    this.request<NozzleMaintenanceDto, any>({
      path: `/api/NozzleMaintenance`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags NozzleMaintenance
   * @name NozzleMaintenanceDetail
   * @request GET:/api/NozzleMaintenance/{id}
   * @secure
   */
  nozzleMaintenanceDetail = (id: string, params: RequestParams = {}) =>
    this.request<NozzleMaintenanceDto, any>({
      path: `/api/NozzleMaintenance/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags NozzleMaintenance
   * @name NozzleMaintenanceUpdate
   * @request PUT:/api/NozzleMaintenance/{id}
   * @secure
   */
  nozzleMaintenanceUpdate = (
    id: string,
    data: NozzleMaintenanceUpdateDto,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/NozzleMaintenance/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags NozzleMaintenance
   * @name NozzleMaintenanceDelete
   * @request DELETE:/api/NozzleMaintenance/{id}
   * @secure
   */
  nozzleMaintenanceDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/NozzleMaintenance/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags NozzleMaintenance
   * @name NozzleMaintenanceByNozzleDetail
   * @request GET:/api/NozzleMaintenance/ByNozzle/{nozzleId}
   * @secure
   */
  nozzleMaintenanceByNozzleDetail = (
    nozzleId: string,
    params: RequestParams = {}
  ) =>
    this.request<NozzleMaintenanceDto[], any>({
      path: `/api/NozzleMaintenance/ByNozzle/${nozzleId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags NozzleMaintenance
   * @name NozzleMaintenanceUpcomingList
   * @request GET:/api/NozzleMaintenance/Upcoming
   * @secure
   */
  nozzleMaintenanceUpcomingList = (
    query?: {
      /**
       * @format int32
       * @default 30
       */
      days?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<NozzleMaintenanceDto[], any>({
      path: `/api/NozzleMaintenance/Upcoming`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags NozzleMaintenance
   * @name NozzleMaintenanceByTypeDetail
   * @request GET:/api/NozzleMaintenance/ByType/{maintenanceType}
   * @secure
   */
  nozzleMaintenanceByTypeDetail = (
    maintenanceType: string,
    params: RequestParams = {}
  ) =>
    this.request<NozzleMaintenanceDto[], any>({
      path: `/api/NozzleMaintenance/ByType/${maintenanceType}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags NozzleMaintenance
   * @name NozzleMaintenanceScheduleList
   * @request GET:/api/NozzleMaintenance/Schedule
   * @secure
   */
  nozzleMaintenanceScheduleList = (
    query?: {
      /** @format date-time */
      startDate?: string;
      /** @format date-time */
      endDate?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<MaintenanceScheduleDto[], any>({
      path: `/api/NozzleMaintenance/Schedule`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags NozzleReadings
   * @name NozzleReadingsList
   * @request GET:/api/NozzleReadings
   * @secure
   */
  nozzleReadingsList = (params: RequestParams = {}) =>
    this.request<NozzleReadingDto[], any>({
      path: `/api/NozzleReadings`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags NozzleReadings
   * @name NozzleReadingsCreate
   * @request POST:/api/NozzleReadings
   * @secure
   */
  nozzleReadingsCreate = (
    data: NozzleReadingCreateDto,
    params: RequestParams = {}
  ) =>
    this.request<NozzleReadingDto, any>({
      path: `/api/NozzleReadings`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags NozzleReadings
   * @name NozzleReadingsUpdate
   * @request PUT:/api/NozzleReadings
   * @secure
   */
  nozzleReadingsUpdate = (
    data: NozzleReadingUpdateDto,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/NozzleReadings`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags NozzleReadings
   * @name NozzleReadingsDetail
   * @request GET:/api/NozzleReadings/{id}
   * @secure
   */
  nozzleReadingsDetail = (id: string, params: RequestParams = {}) =>
    this.request<NozzleReadingDto, any>({
      path: `/api/NozzleReadings/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags NozzleReadings
   * @name NozzleReadingsDelete
   * @request DELETE:/api/NozzleReadings/{id}
   * @secure
   */
  nozzleReadingsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/NozzleReadings/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags NozzleReadings
   * @name NozzleReadingsByNozzleDetail
   * @request GET:/api/NozzleReadings/ByNozzle/{nozzleId}
   * @secure
   */
  nozzleReadingsByNozzleDetail = (
    nozzleId: string,
    params: RequestParams = {}
  ) =>
    this.request<NozzleReadingDto[], any>({
      path: `/api/NozzleReadings/ByNozzle/${nozzleId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags NozzleReadings
   * @name NozzleReadingsByShiftDetail
   * @request GET:/api/NozzleReadings/ByShift/{shiftId}
   * @secure
   */
  nozzleReadingsByShiftDetail = (shiftId: string, params: RequestParams = {}) =>
    this.request<NozzleReadingDto[], any>({
      path: `/api/NozzleReadings/ByShift/${shiftId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags NozzleReadings
   * @name NozzleReadingsByEmployeeDetail
   * @request GET:/api/NozzleReadings/ByEmployee/{employeeId}
   * @secure
   */
  nozzleReadingsByEmployeeDetail = (
    employeeId: string,
    params: RequestParams = {}
  ) =>
    this.request<NozzleReadingDto[], any>({
      path: `/api/NozzleReadings/ByEmployee/${employeeId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags NozzleReadings
   * @name NozzleReadingsSummaryByShiftDetail
   * @request GET:/api/NozzleReadings/Summary/ByShift/{shiftId}
   * @secure
   */
  nozzleReadingsSummaryByShiftDetail = (
    shiftId: string,
    params: RequestParams = {}
  ) =>
    this.request<NozzleReadingSummaryDto[], any>({
      path: `/api/NozzleReadings/Summary/ByShift/${shiftId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags NozzleReadings
   * @name NozzleReadingsLatestDetail
   * @request GET:/api/NozzleReadings/Latest/{nozzleId}/{readingType}
   * @secure
   */
  nozzleReadingsLatestDetail = (
    nozzleId: string,
    readingType: string,
    params: RequestParams = {}
  ) =>
    this.request<NozzleReadingDto, any>({
      path: `/api/NozzleReadings/Latest/${nozzleId}/${readingType}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags NozzleReadings
   * @name NozzleReadingsValidateCreate
   * @request POST:/api/NozzleReadings/Validate
   * @secure
   */
  nozzleReadingsValidateCreate = (
    data: ValidateReadingRequestDto,
    params: RequestParams = {}
  ) =>
    this.request<boolean, any>({
      path: `/api/NozzleReadings/Validate`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Pal
   * @name GetApi
   * @request GET:/api/Pal
   * @secure
   */
  getApi = (params: RequestParams = {}) =>
    this.request<string, any>({
      path: `/api/Pal`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Pricing
   * @name PricingCurrentList
   * @request GET:/api/Pricing/current
   * @secure
   */
  pricingCurrentList = (params: RequestParams = {}) =>
    this.request<PricingDto[], any>({
      path: `/api/Pricing/current`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Pricing
   * @name PricingHistoryDetail
   * @request GET:/api/Pricing/history/{fuelType}
   * @secure
   */
  pricingHistoryDetail = (fuelType: string, params: RequestParams = {}) =>
    this.request<PricingHistoryDto[], any>({
      path: `/api/Pricing/history/${fuelType}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Pricing
   * @name PricingDetail
   * @request GET:/api/Pricing/{id}
   * @secure
   */
  pricingDetail = (id: string, params: RequestParams = {}) =>
    this.request<PricingDto, any>({
      path: `/api/Pricing/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Pricing
   * @name PricingUpdate
   * @request PUT:/api/Pricing/{id}
   * @secure
   */
  pricingUpdate = (
    id: string,
    data: PricingUpdateDto,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/Pricing/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Pricing
   * @name PricingDelete
   * @request DELETE:/api/Pricing/{id}
   * @secure
   */
  pricingDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Pricing/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Pricing
   * @name PricingLatestDetail
   * @request GET:/api/Pricing/latest/{fuelType}
   * @secure
   */
  pricingLatestDetail = (fuelType: string, params: RequestParams = {}) =>
    this.request<number, any>({
      path: `/api/Pricing/latest/${fuelType}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Pricing
   * @name PricingCreate
   * @request POST:/api/Pricing
   * @secure
   */
  pricingCreate = (data: PricingCreateDto, params: RequestParams = {}) =>
    this.request<PricingDto, any>({
      path: `/api/Pricing`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Pump
   * @name PumpList
   * @request GET:/api/Pump
   * @secure
   */
  pumpList = (params: RequestParams = {}) =>
    this.request<PetrolPumpDto[], any>({
      path: `/api/Pump`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Pump
   * @name PumpCreate
   * @request POST:/api/Pump
   * @secure
   */
  pumpCreate = (data: PetrolPumpCreateDto, params: RequestParams = {}) =>
    this.request<PetrolPumpDto, any>({
      path: `/api/Pump`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Pump
   * @name PumpDetail
   * @request GET:/api/Pump/{id}
   * @secure
   */
  pumpDetail = (id: string, params: RequestParams = {}) =>
    this.request<PetrolPumpDto, any>({
      path: `/api/Pump/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Pump
   * @name PumpUpdate
   * @request PUT:/api/Pump/{id}
   * @secure
   */
  pumpUpdate = (id: string, data: PetrolPumpDto, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Pump/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Pump
   * @name PumpDelete
   * @request DELETE:/api/Pump/{id}
   * @secure
   */
  pumpDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Pump/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags ReadingImage
   * @name ReadingImageUploadCreate
   * @request POST:/api/ReadingImage/Upload
   * @secure
   */
  readingImageUploadCreate = (
    data: {
      /** @format binary */
      file?: File;
    },
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/ReadingImage/Upload`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags ReadingImage
   * @name ReadingImageUploadForReadingCreate
   * @request POST:/api/ReadingImage/UploadForReading/{readingId}
   * @secure
   */
  readingImageUploadForReadingCreate = (
    readingId: string,
    data: {
      /** @format binary */
      file?: File;
    },
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/ReadingImage/UploadForReading/${readingId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags ReadingImage
   * @name ReadingImageDeleteDelete
   * @request DELETE:/api/ReadingImage/Delete
   * @secure
   */
  readingImageDeleteDelete = (
    query?: {
      filePath?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/ReadingImage/Delete`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Shift
   * @name ShiftShiftsList
   * @request GET:/api/Shift/{petrolPumpId}/shifts
   * @secure
   */
  shiftShiftsList = (petrolPumpId: string, params: RequestParams = {}) =>
    this.request<ShiftDTOListAPIServiceResponse, any>({
      path: `/api/Shift/${petrolPumpId}/shifts`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Shift
   * @name ShiftDetailsDetail
   * @request GET:/api/Shift/details/{id}
   * @secure
   */
  shiftDetailsDetail = (id: string, params: RequestParams = {}) =>
    this.request<ShiftDTOAPIServiceResponse, any>({
      path: `/api/Shift/details/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Shift
   * @name ShiftCreate
   * @request POST:/api/Shift
   * @secure
   */
  shiftCreate = (data: ShiftCreateDTO, params: RequestParams = {}) =>
    this.request<ShiftDTOAPIServiceResponse, any>({
      path: `/api/Shift`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Shift
   * @name ShiftUpdate
   * @request PUT:/api/Shift/{id}
   * @secure
   */
  shiftUpdate = (
    id: string,
    data: ShiftUpdateDTO,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/Shift/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Shift
   * @name ShiftDelete
   * @request DELETE:/api/Shift/{id}
   * @secure
   */
  shiftDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Shift/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Suppliers
   * @name SuppliersList
   * @request GET:/api/Suppliers
   * @secure
   */
  suppliersList = (params: RequestParams = {}) =>
    this.request<SupplierDto[], any>({
      path: `/api/Suppliers`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Suppliers
   * @name SuppliersCreate
   * @request POST:/api/Suppliers
   * @secure
   */
  suppliersCreate = (data: SupplierCreateDto, params: RequestParams = {}) =>
    this.request<SupplierDto, any>({
      path: `/api/Suppliers`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Suppliers
   * @name SuppliersDetail
   * @request GET:/api/Suppliers/{id}
   * @secure
   */
  suppliersDetail = (id: string, params: RequestParams = {}) =>
    this.request<SupplierDto, any>({
      path: `/api/Suppliers/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Suppliers
   * @name SuppliersUpdate
   * @request PUT:/api/Suppliers/{id}
   * @secure
   */
  suppliersUpdate = (
    id: string,
    data: SupplierUpdateDto,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/Suppliers/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Suppliers
   * @name SuppliersDelete
   * @request DELETE:/api/Suppliers/{id}
   * @secure
   */
  suppliersDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Suppliers/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Suppliers
   * @name SuppliersByPumpList
   * @request GET:/api/Suppliers/ByPump
   * @secure
   */
  suppliersByPumpList = (params: RequestParams = {}) =>
    this.request<SupplierDto[], any>({
      path: `/api/Suppliers/ByPump`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Suppliers
   * @name SuppliersByPumpDetail
   * @request GET:/api/Suppliers/ByPump/{pumpId}
   * @secure
   */
  suppliersByPumpDetail = (pumpId: string, params: RequestParams = {}) =>
    this.request<SupplierDto[], any>({
      path: `/api/Suppliers/ByPump/${pumpId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Suppliers
   * @name SuppliersByGstDetail
   * @request GET:/api/Suppliers/ByGST/{gstNumber}
   * @secure
   */
  suppliersByGstDetail = (gstNumber: string, params: RequestParams = {}) =>
    this.request<SupplierDto, any>({
      path: `/api/Suppliers/ByGST/${gstNumber}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Suppliers
   * @name SuppliersStatusPartialUpdate
   * @request PATCH:/api/Suppliers/{id}/Status
   * @secure
   */
  suppliersStatusPartialUpdate = (
    id: string,
    data: boolean,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/Suppliers/${id}/Status`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Suppliers
   * @name SuppliersCheckGstDetail
   * @request GET:/api/Suppliers/CheckGST/{gstNumber}
   * @secure
   */
  suppliersCheckGstDetail = (gstNumber: string, params: RequestParams = {}) =>
    this.request<boolean, any>({
      path: `/api/Suppliers/CheckGST/${gstNumber}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
