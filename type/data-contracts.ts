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

export interface AddressCreateUpdateDTO {
  addressLineOne?: string | null;
  addressLineTwo?: string | null;
  /** @format uuid */
  cityId?: string | null;
  /** @format uuid */
  stateId?: string | null;
  /** @format uuid */
  districtId?: string | null;
  postalCode?: string | null;
  /** @format double */
  latitude?: number | null;
  /** @format double */
  longitude?: number | null;
}

export interface AddressDTO {
  /** @format uuid */
  addressId?: string;
  addressLineOne?: string | null;
  addressLineTwo?: string | null;
  /** @format uuid */
  cityId?: string | null;
  cityName?: string | null;
  /** @format uuid */
  stateId?: string | null;
  stateName?: string | null;
  /** @format uuid */
  districtId?: string | null;
  districtName?: string | null;
  postalCode?: string | null;
  /** @format double */
  latitude?: number | null;
  /** @format double */
  longitude?: number | null;
  /** @format date-time */
  createdAt?: string;
}

export interface AdminChangePasswordDTO {
  adminEmail?: string | null;
  userEmail?: string | null;
  newPassword?: string | null;
}

export interface AssignEmployeeShiftDTO {
  /** @format uuid */
  employeeId: string;
  /** @format uuid */
  shiftId: string;
  /** @format date-time */
  assignedDate: string;
  isTransfer?: boolean;
}

export interface AuditLog {
  /** @format uuid */
  auditLogId?: string;
  /**
   * @minLength 0
   * @maxLength 450
   */
  userId: string;
  /**
   * @minLength 0
   * @maxLength 100
   */
  tableName: string;
  /** @format uuid */
  recordId?: string;
  /**
   * @minLength 0
   * @maxLength 50
   */
  actionType: string;
  oldValue?: string | null;
  newValue?: string | null;
  /** @format date-time */
  actionTimestamp?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  /**
   * @minLength 0
   * @maxLength 50
   */
  ipAddress?: string | null;
  /**
   * @minLength 0
   * @maxLength 255
   */
  userAgent?: string | null;
}

export interface AuditLogListAPIServiceResponse {
  data?: AuditLog[] | null;
  success?: boolean;
  message?: string | null;
  validationErrors?: string | null;
}

export interface AuthResponseDTO {
  token?: string | null;
  refreshToken?: string | null;
  /** @format date-time */
  expiration?: string;
}

export interface BooleanAPIServiceResponse {
  data?: boolean;
  success?: boolean;
  message?: string | null;
  validationErrors?: string | null;
}

export interface BusinessKpiDTO {
  /** @format double */
  totalSalesVolume?: number;
  /** @format double */
  totalRevenue?: number;
  /** @format double */
  grossProfit?: number;
  /** @format double */
  grossProfitMargin?: number;
  /** @format double */
  inventoryTurnoverRate?: number;
  /** @format double */
  averageTransactionValue?: number;
  /** @format int32 */
  transactionsPerDay?: number;
  salesVolumeByFuelType?: Record<string, number>;
  profitByFuelType?: Record<string, number>;
  salesTrend?: Record<string, number>;
}

export interface ChangePasswordDTO {
  email?: string | null;
  currentPassword?: string | null;
  newPassword?: string | null;
}

export interface CityDto {
  /** @format uuid */
  cityId?: string;
  name?: string | null;
  /** @format uuid */
  stateId?: string;
  stateName?: string | null;
}

export interface CustomerCreateDto {
  customerType?: string | null;
  customerName?: string | null;
  contactPerson?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  zipCode?: string | null;
  gstNumber?: string | null;
  /** @format double */
  creditLimit?: number | null;
  customerCode?: string | null;
}

export interface CustomerDto {
  /** @format uuid */
  customerId?: string;
  customerType?: string | null;
  customerName?: string | null;
  contactPerson?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  zipCode?: string | null;
  gstNumber?: string | null;
  /** @format double */
  creditLimit?: number;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  customerCode?: string | null;
  /** @format double */
  totalDueAmount?: number;
  /** @format int32 */
  loyaltyPoints?: number;
}

export interface CustomerDtoAPIServiceResponse {
  data?: CustomerDto;
  success?: boolean;
  message?: string | null;
  validationErrors?: string | null;
}

export interface CustomerDtoListAPIServiceResponse {
  data?: CustomerDto[] | null;
  success?: boolean;
  message?: string | null;
  validationErrors?: string | null;
}

export interface CustomerInsightsDTO {
  /** @format int32 */
  totalCustomers?: number;
  /** @format int32 */
  newCustomers?: number;
  /** @format int32 */
  regularCustomers?: number;
  /** @format double */
  averageTransactionValue?: number;
  customersByType?: Record<string, number>;
  /** @format double */
  loyaltyProgramUtilization?: number;
}

export interface CustomerUpdateDto {
  /** @format uuid */
  customerId?: string;
  customerType?: string | null;
  customerName?: string | null;
  contactPerson?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  zipCode?: string | null;
  gstNumber?: string | null;
  /** @format double */
  creditLimit?: number | null;
  customerCode?: string | null;
}

export interface DailyForecastDto {
  /** @format date-time */
  date?: string;
  /** @format double */
  projectedConsumption?: number;
  /** @format double */
  projectedEndingStock?: number;
}

export interface DailyForecastValueDTO {
  /** @format date-time */
  date?: string;
  /** @format double */
  projectedSalesVolume?: number;
  /** @format double */
  projectedRevenue?: number;
  volumeByFuelType?: Record<string, number>;
}

export interface DailyRevenueDTO {
  /** @format date-time */
  date?: string;
  /** @format double */
  totalRevenue?: number;
  /** @format double */
  fuelSalesRevenue?: number;
  /** @format double */
  otherRevenue?: number;
  paymentBreakdown?: Record<string, number>;
}

export interface DailySalesSummaryDTO {
  /** @format date-time */
  date?: string;
  /** @format double */
  totalSalesVolume?: number;
  /** @format double */
  totalSalesValue?: number;
  /** @format int32 */
  transactionCount?: number;
  /** @format double */
  averageTransactionValue?: number;
  salesByFuelType?: Record<string, number>;
  revenueByFuelType?: Record<string, number>;
}

export interface DistrictDto {
  /** @format uuid */
  districtId?: string;
  name?: string | null;
  /** @format uuid */
  stateId?: string;
  stateName?: string | null;
}

export interface EmployeeCreateDto {
  /** @format uuid */
  petrolPumpId: string;
  /**
   * @minLength 0
   * @maxLength 100
   */
  firstName: string;
  /**
   * @minLength 0
   * @maxLength 100
   */
  lastName: string;
  /**
   * @format email
   * @minLength 1
   */
  email: string;
  /**
   * @format password
   * @minLength 6
   * @maxLength 100
   */
  password: string;
  /** @minLength 1 */
  role: string;
  /** @format date-time */
  hireDate: string;
  /** @format date */
  dateOfBirth?: string | null;
  /**
   * @minLength 0
   * @maxLength 50
   */
  governmentId?: string | null;
  /**
   * @minLength 0
   * @maxLength 255
   */
  address?: string | null;
  /**
   * @minLength 0
   * @maxLength 100
   */
  city?: string | null;
  /**
   * @minLength 0
   * @maxLength 100
   */
  state?: string | null;
  /**
   * @minLength 0
   * @maxLength 10
   */
  zipCode?: string | null;
  /**
   * @format tel
   * @minLength 0
   * @maxLength 15
   */
  phoneNumber: string;
  /**
   * @format tel
   * @minLength 0
   * @maxLength 15
   */
  emergencyContact?: string | null;
}

export interface EmployeeDto {
  /** @format uuid */
  employeeId?: string;
  userId?: string | null;
  /** @format uuid */
  petrolPumpId?: string;
  firstName?: string | null;
  lastName?: string | null;
  fullName?: string | null;
  /** @format date-time */
  hireDate?: string;
  isActive?: boolean;
  /** @format date-time */
  dateOfBirth?: string | null;
  governmentId?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  zipCode?: string | null;
  phoneNumber?: string | null;
  emergencyContact?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  email?: string | null;
  role?: string | null;
}

export interface EmployeeShiftDTO {
  /** @format uuid */
  employeeShiftId?: string;
  /** @format uuid */
  employeeId?: string;
  employeeName?: string | null;
  /** @format uuid */
  shiftId?: string;
  /** @format int32 */
  shiftNumber?: number;
  shiftStartTime?: string | null;
  shiftEndTime?: string | null;
  /** @format date */
  startDate?: string;
  /** @format date */
  endDate?: string;
}

export interface EmployeeShiftDTOListAPIServiceResponse {
  data?: EmployeeShiftDTO[] | null;
  success?: boolean;
  message?: string | null;
  validationErrors?: string | null;
}

export interface EmployeeUpdateDto {
  /** @format uuid */
  employeeId: string;
  /**
   * @minLength 0
   * @maxLength 100
   */
  firstName?: string | null;
  /**
   * @minLength 0
   * @maxLength 100
   */
  lastName?: string | null;
  /** @format email */
  email?: string | null;
  role?: string | null;
  /** @format date-time */
  hireDate?: string | null;
  isActive?: boolean | null;
  /** @format date */
  dateOfBirth?: string | null;
  /**
   * @minLength 0
   * @maxLength 50
   */
  governmentId?: string | null;
  /**
   * @minLength 0
   * @maxLength 255
   */
  address?: string | null;
  /**
   * @minLength 0
   * @maxLength 100
   */
  city?: string | null;
  /**
   * @minLength 0
   * @maxLength 100
   */
  state?: string | null;
  /**
   * @minLength 0
   * @maxLength 10
   */
  zipCode?: string | null;
  /**
   * @format tel
   * @minLength 0
   * @maxLength 15
   */
  phoneNumber?: string | null;
  /**
   * @format tel
   * @minLength 0
   * @maxLength 15
   */
  emergencyContact?: string | null;
}

export interface ForecastingDTO {
  dailyForecasts?: DailyForecastValueDTO[] | null;
  /** @format double */
  projectedTotalVolume?: number;
  /** @format double */
  projectedTotalRevenue?: number;
  projectedVolumeByFuelType?: Record<string, number>;
  projectedRevenueByFuelType?: Record<string, number>;
}

export interface FuelConsumptionForecastDto {
  /** @format uuid */
  fuelTankId?: string;
  fuelType?: string | null;
  /** @format double */
  currentStock?: number;
  /** @format double */
  averageDailyConsumption?: number;
  /** @format int32 */
  estimatedDaysRemaining?: number;
  /** @format date-time */
  projectedEmptyDate?: string;
  dailyForecasts?: DailyForecastDto[] | null;
}

export interface FuelConsumptionForecastDtoAPIServiceResponse {
  data?: FuelConsumptionForecastDto;
  success?: boolean;
  message?: string | null;
  validationErrors?: string | null;
}

export interface FuelConsumptionRateDTO {
  fuelType?: string | null;
  /** @format double */
  averageDailyConsumption?: number;
  /** @format double */
  weekdayAverage?: number;
  /** @format double */
  weekendAverage?: number;
  /** @format double */
  peakDayConsumption?: number;
  peakDay?: string | null;
  /** @format date-time */
  peakDate?: string;
}

export interface FuelDeliveryCreateDto {
  /** @format uuid */
  fuelTankId: string;
  /**
   * @format double
   * @min 1
   */
  quantityReceived: number;
  /** @format double */
  density?: number | null;
  /** @format double */
  temperature?: number | null;
  /** @format uuid */
  supplierId: string;
  /**
   * @minLength 3
   * @maxLength 50
   */
  invoiceNumber: string;
  /** @format date-time */
  deliveryDate: string;
  notes?: string | null;
}

export interface FuelDeliveryLogDto {
  /** @format uuid */
  fuelDeliveryLogId?: string;
  /** @format uuid */
  petrolPumpId?: string;
  /** @format uuid */
  fuelTankId?: string;
  fuelType?: string | null;
  /** @format double */
  quantityReceived?: number;
  /** @format double */
  density?: number | null;
  /** @format double */
  temperature?: number | null;
  /** @format uuid */
  supplierId?: string;
  supplierName?: string | null;
  invoiceNumber?: string | null;
  /** @format date-time */
  deliveryDate?: string;
  /** @format uuid */
  receivedBy?: string | null;
  receivedByName?: string | null;
  notes?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  fuelTankName?: string | null;
  /** @format double */
  currentTankCapacity?: number;
  /** @format double */
  currentTankLevel?: number;
}

export interface FuelDeliverySummaryDto {
  fuelType?: string | null;
  /** @format double */
  totalQuantityReceived?: number;
  /** @format int32 */
  deliveryCount?: number;
  /** @format date-time */
  firstDeliveryDate?: string;
  /** @format date-time */
  lastDeliveryDate?: string;
}

export interface FuelDeliveryUpdateDto {
  /** @format uuid */
  fuelDeliveryLogId: string;
  /**
   * @format double
   * @min 1
   */
  quantityReceived?: number;
  /** @format double */
  density?: number | null;
  /** @format double */
  temperature?: number | null;
  invoiceNumber?: string | null;
  /** @format date-time */
  deliveryDate?: string | null;
  notes?: string | null;
}

export interface FuelDispenserCreateDto {
  /** @format uuid */
  fuelTankId: string;
  /**
   * @format int32
   * @min 1
   * @max 100
   */
  dispenserNumber: number;
  /**
   * @minLength 0
   * @maxLength 50
   */
  numberOfNozzles: number;
  /**
   * @minLength 0
   * @maxLength 50
   */
  fuelType: string;
  /**
   * @minLength 0
   * @maxLength 20
   * @pattern ^(Active|Inactive|Maintenance)$
   */
  status: string;
}

export interface FuelDispenserUnitDto {
  /** @format uuid */
  fuelDispenserUnitId?: string;
  /** @format uuid */
  petrolPumpId?: string;
  /** @format uuid */
  fuelTankId?: string;
  /** @format int32 */
  dispenserNumber?: number;
  numberOfNozzles: number;
  fuelType?: string | null;
  status?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  fuelTankName?: string | null;
}

export interface FuelDispenserUpdateDto {
  /** @format uuid */
  fuelDispenserUnitId: string;
  /** @format uuid */
  fuelTankId: string;
  /**
   * @format int32
   * @min 1
   * @max 100
   */
  dispenserNumber: number;
  /**
   * @minLength 0
   * @maxLength 50
   */
  numberOfNozzles: number;
  /**
   * @minLength 0
   * @maxLength 50
   */
  fuelType: string;
  /**
   * @minLength 0
   * @maxLength 20
   * @pattern ^(Active|Inactive|Maintenance)$
   */
  status: string;
}

export interface FuelInventoryStatusDTO {
  /** @format uuid */
  fuelInventoryId?: string;
  /** @format uuid */
  fuelTankId?: string;
  tankName?: string | null;
  fuelType?: string | null;
  /** @format double */
  currentStock?: number;
  /** @format double */
  capacityInLiters?: number;
  /** @format double */
  stockPercentage?: number;
  /** @format date-time */
  lastUpdatedAt?: string;
  /** @format date-time */
  lastDeliveryDate?: string | null;
  /** @format double */
  deadStock?: number;
  /** @format double */
  availableStock?: number;
}

export interface FuelQualityCheckCreateDto {
  /** @format uuid */
  petrolPumpId: string;
  /** @format uuid */
  fuelTankId: string;
  /**
   * @minLength 0
   * @maxLength 50
   */
  fuelType: string;
  /**
   * @format double
   * @min 0.001
   * @max 2
   */
  density: number;
  /**
   * @format double
   * @min -50
   * @max 100
   */
  temperature: number;
  /**
   * @format double
   * @min 0
   * @max 100
   */
  waterContent?: number | null;
  /**
   * @minLength 0
   * @maxLength 50
   * @pattern ^(Good|Average|Poor)$
   */
  qualityStatus: string;
  checkedBy?: string | null;
  /** @format date-time */
  checkedAt?: string | null;
}

export interface FuelQualityCheckDto {
  /** @format uuid */
  fuelQualityCheckId?: string;
  /** @format uuid */
  petrolPumpId?: string;
  /** @format uuid */
  fuelTankId?: string;
  fuelTankName?: string | null;
  fuelType?: string | null;
  /** @format double */
  density?: number;
  /** @format double */
  temperature?: number;
  /** @format double */
  waterContent?: number | null;
  qualityStatus?: string | null;
  checkedBy?: string | null;
  checkedByName?: string | null;
  /** @format date-time */
  checkedAt?: string;
  /** @format uuid */
  approvedBy?: string | null;
  approvedByName?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  isApproved?: boolean;
}

export interface FuelQualityCheckUpdateDto {
  /** @format uuid */
  fuelQualityCheckId: string;
  /**
   * @format double
   * @min 0.001
   * @max 2
   */
  density?: number;
  /**
   * @format double
   * @min -50
   * @max 100
   */
  temperature?: number;
  /**
   * @format double
   * @min 0
   * @max 100
   */
  waterContent?: number | null;
  /**
   * @minLength 0
   * @maxLength 50
   * @pattern ^(Good|Average|Poor)$
   */
  qualityStatus?: string | null;
  /** @format date-time */
  checkedAt?: string | null;
}

export interface FuelTankCreateDto {
  /** @format uuid */
  petrolPumpId: string;
  /**
   * @minLength 0
   * @maxLength 50
   */
  fuelType: string;
  /**
   * @format double
   * @min 100
   * @max 1000000
   */
  capacityInLiters: number;
  /**
   * @format double
   * @min 0
   * @max 1000000
   */
  currentStock?: number;
  /**
   * @minLength 0
   * @maxLength 20
   * @pattern ^(Active|Inactive|Maintenance)$
   */
  status?: string | null;
}

export interface FuelTankDto {
  /** @format uuid */
  fuelTankId?: string;
  /** @format uuid */
  petrolPumpId?: string;
  fuelType?: string | null;
  /** @format double */
  capacityInLiters?: number;
  /** @format double */
  currentStock?: number;
  /** @format date-time */
  lastRefilledAt?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  status?: string | null;
  /** @format double */
  stockPercentage?: number;
  isLowStock?: boolean;
  /** @format double */
  remainingCapacity?: number;
}

export interface FuelTankStockAdjustmentDto {
  /** @format uuid */
  fuelTankId: string;
  /**
   * @format double
   * @min -1000000
   * @max 1000000
   */
  adjustmentAmount: number;
  /**
   * @minLength 0
   * @maxLength 255
   */
  adjustmentReason: string;
  /** @format uuid */
  adjustedByEmployeeId?: string | null;
  /**
   * @minLength 0
   * @maxLength 50
   */
  referenceNumber?: string | null;
  /**
   * @minLength 0
   * @maxLength 500
   */
  notes?: string | null;
}

export interface FuelTankUpdateDto {
  /** @format uuid */
  fuelTankId: string;
  /**
   * @minLength 0
   * @maxLength 50
   */
  fuelType?: string | null;
  /**
   * @format double
   * @min 100
   * @max 1000000
   */
  capacityInLiters?: number | null;
  /**
   * @format double
   * @min 0
   * @max 1000000
   */
  currentStock?: number | null;
  /**
   * @minLength 0
   * @maxLength 20
   * @pattern ^(Active|Inactive|Maintenance)$
   */
  status?: string | null;
}

export interface FuelTypeMetricDTO {
  fuelType?: string | null;
  /** @format double */
  volume?: number;
  /** @format double */
  value?: number;
  /** @format double */
  percentageOfTotalVolume?: number;
  /** @format double */
  percentageOfTotalValue?: number;
  /** @format double */
  averagePricePerLiter?: number;
}

export interface FuelTypeSalesSummaryDTO {
  /** @format uuid */
  petrolPumpId?: string;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  fuelTypes?: FuelTypeMetricDTO[] | null;
  /** @format double */
  totalSalesVolume?: number;
  /** @format double */
  totalSalesValue?: number;
}

export interface HourlyMetricDTO {
  /** @format int32 */
  hour?: number;
  /** @format double */
  salesVolume?: number;
  /** @format double */
  salesValue?: number;
  /** @format int32 */
  transactionCount?: number;
}

export interface HourlySalesPatternDTO {
  /** @format date-time */
  date?: string;
  hourlyData?: HourlyMetricDTO[] | null;
  /** @format int32 */
  peakHour?: number;
  /** @format double */
  peakHourVolume?: number;
  /** @format int32 */
  slowHour?: number;
  /** @format double */
  slowHourVolume?: number;
}

export interface InventoryDailyRecordDto {
  /** @format date-time */
  date?: string;
  /** @format double */
  openingStock?: number;
  /** @format double */
  received?: number;
  /** @format double */
  dispensed?: number;
  /** @format double */
  closingStock?: number;
  /** @format double */
  adjustmentQuantity?: number;
  adjustmentReason?: string | null;
}

export interface InventoryDiscrepancyDto {
  /** @format uuid */
  fuelTankId?: string;
  fuelType?: string | null;
  /** @format date-time */
  discrepancyDate?: string;
  /** @format double */
  expectedStock?: number;
  /** @format double */
  actualStock?: number;
  /** @format double */
  difference?: number;
  /** @format double */
  differencePercentage?: number;
  status?: string | null;
  notes?: string | null;
}

export interface InventoryDiscrepancyDtoListAPIServiceResponse {
  data?: InventoryDiscrepancyDto[] | null;
  success?: boolean;
  message?: string | null;
  validationErrors?: string | null;
}

export interface InventoryHistoryDto {
  /** @format uuid */
  fuelTankId?: string;
  fuelType?: string | null;
  dailyRecords?: InventoryDailyRecordDto[] | null;
  /** @format double */
  totalReceived?: number;
  /** @format double */
  totalDispensed?: number;
  /** @format double */
  netChange?: number;
}

export interface InventoryHistoryDtoAPIServiceResponse {
  data?: InventoryHistoryDto;
  success?: boolean;
  message?: string | null;
  validationErrors?: string | null;
}

export interface InventoryReconciliationDto {
  /** @format uuid */
  fuelTankId?: string;
  fuelType?: string | null;
  /** @format double */
  previousReading?: number;
  /** @format double */
  currentReading?: number;
  /** @format double */
  systemCalculatedStock?: number;
  /** @format double */
  discrepancy?: number;
  /** @format date-time */
  reconciliationDate?: string;
  isAdjusted?: boolean;
  notes?: string | null;
}

export interface InventoryReconciliationDtoAPIServiceResponse {
  data?: InventoryReconciliationDto;
  success?: boolean;
  message?: string | null;
  validationErrors?: string | null;
}

export interface InventoryTrendDTO {
  /** @format date-time */
  date?: string;
  openingStock?: Record<string, number>;
  closingStock?: Record<string, number>;
  deliveries?: Record<string, number>;
  sales?: Record<string, number>;
}

export interface InventoryUpdateRequestDto {
  /** @format uuid */
  tankId?: string;
  /** @format double */
  quantity?: number;
}

export interface LoginDTO {
  /** @minLength 1 */
  email: string;
  /** @minLength 1 */
  password: string;
  /** @format int32 */
  sapNo?: number;
}

export interface LowStockAlertDto {
  /** @format uuid */
  fuelTankId?: string;
  fuelTankName?: string | null;
  /** @format uuid */
  petrolPumpId?: string;
  fuelType?: string | null;
  /** @format double */
  currentStock?: number;
  /** @format double */
  thresholdLevel?: number;
  /** @format double */
  capacityInLiters?: number;
  /** @format double */
  stockPercentage?: number;
  /** @format int32 */
  estimatedDaysRemaining?: number;
  /** @format date-time */
  alertGeneratedAt?: string;
}

export interface LowStockAlertDtoListAPIServiceResponse {
  data?: LowStockAlertDto[] | null;
  success?: boolean;
  message?: string | null;
  validationErrors?: string | null;
}

export interface MaintenanceScheduleDto {
  /** @format uuid */
  nozzleId?: string;
  /** @format int32 */
  nozzleNumber?: number;
  dispenserNumber?: string | null;
  fuelType?: string | null;
  maintenanceType?: string | null;
  /** @format date-time */
  lastMaintenanceDate?: string | null;
  /** @format date-time */
  nextMaintenanceDate?: string | null;
  /** @format int32 */
  daysUntilDue?: number;
  isOverdue?: boolean;
  status?: string | null;
}

export interface NozzleCreateDto {
  /** @format uuid */
  fuelDispenserUnitId: string;
  /**
   * @format int32
   * @min 1
   * @max 99
   */
  nozzleNumber: number;
  /**
   * @minLength 0
   * @maxLength 50
   */
  fuelType: string;
  /**
   * @minLength 0
   * @maxLength 20
   * @pattern ^(Active|Inactive|Maintenance)$
   */
  status: string;
  /** @format date-time */
  lastCalibrationDate?: string | null;
}

export interface NozzleDto {
  /** @format uuid */
  nozzleId?: string;
  /** @format uuid */
  fuelDispenserUnitId?: string;
  /** @format int32 */
  nozzleNumber?: number;
  fuelType?: string | null;
  status?: string | null;
  /** @format date-time */
  lastCalibrationDate?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  fuelDispenserNumber?: string | null;
}

export interface NozzleMaintenanceCreateDto {
  /** @format uuid */
  nozzleId: string;
  /**
   * @minLength 0
   * @maxLength 50
   */
  maintenanceType: string;
  /** @format date-time */
  maintenanceDate: string;
  /** @format uuid */
  performedBy?: string | null;
  /**
   * @minLength 0
   * @maxLength 500
   */
  description?: string | null;
  /**
   * @format double
   * @min 0
   * @max 100000
   */
  cost?: number | null;
  /** @format date-time */
  nextMaintenanceDue?: string | null;
}

export interface NozzleMaintenanceDto {
  /** @format uuid */
  nozzleMaintenanceId?: string;
  /** @format uuid */
  nozzleId?: string;
  /** @format int32 */
  nozzleNumber?: number;
  dispenserNumber?: string | null;
  fuelType?: string | null;
  maintenanceType?: string | null;
  /** @format date-time */
  maintenanceDate?: string;
  /** @format uuid */
  performedBy?: string | null;
  performedByName?: string | null;
  description?: string | null;
  /** @format double */
  cost?: number | null;
  /** @format date-time */
  nextMaintenanceDue?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  isUpcoming?: boolean;
  isOverdue?: boolean;
}

export interface NozzleMaintenanceUpdateDto {
  /** @format uuid */
  nozzleMaintenanceId: string;
  /**
   * @minLength 0
   * @maxLength 50
   */
  maintenanceType?: string | null;
  /** @format date-time */
  maintenanceDate?: string | null;
  /** @format uuid */
  performedBy?: string | null;
  /**
   * @minLength 0
   * @maxLength 500
   */
  description?: string | null;
  /**
   * @format double
   * @min 0
   * @max 100000
   */
  cost?: number | null;
  /** @format date-time */
  nextMaintenanceDue?: string | null;
}

export interface NozzleMetricDTO {
  /** @format uuid */
  nozzleId?: string;
  /** @format int32 */
  nozzleNumber?: number;
  /** @format uuid */
  dispenserId?: string;
  /** @format int32 */
  dispenserNumber?: number;
  fuelType?: string | null;
  /** @format double */
  totalVolumeSold?: number;
  /** @format double */
  totalRevenue?: number;
  /** @format int32 */
  transactionCount?: number;
  /** @format double */
  utilizationRate?: number;
  /** @format int32 */
  maintenanceIncidents?: number;
}

export interface NozzlePerformanceDTO {
  nozzleMetrics?: NozzleMetricDTO[] | null;
  bestPerformingNozzle?: string | null;
  underperformingNozzle?: string | null;
}

export interface NozzleReadingCreateDto {
  /** @format uuid */
  nozzleId: string;
  /** @format uuid */
  shiftId: string;
  /**
   * @minLength 1
   * @pattern ^(Start|End)$
   */
  readingType: string;
  /**
   * @format double
   * @min 0
   * @max 999999.99
   */
  meterReading: number;
  readingImage?: string | null;
  /** @format date-time */
  recordedAt?: string | null;
}

export interface NozzleReadingDto {
  /** @format uuid */
  nozzleReadingId?: string;
  /** @format uuid */
  nozzleId?: string;
  /** @format uuid */
  employeeId?: string;
  /** @format uuid */
  shiftId?: string;
  readingType?: string | null;
  /** @format double */
  meterReading?: number;
  readingImage?: string | null;
  /** @format date-time */
  recordedAt?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  employeeName?: string | null;
  nozzleNumber?: string | null;
  fuelType?: string | null;
  dispenserNumber?: string | null;
}

export interface NozzleReadingSummaryDto {
  /** @format uuid */
  nozzleId?: string;
  nozzleNumber?: string | null;
  fuelType?: string | null;
  /** @format double */
  startReading?: number;
  /** @format double */
  endReading?: number;
  /** @format double */
  volume?: number;
  dispenserNumber?: string | null;
}

export interface NozzleReadingUpdateDto {
  /** @format uuid */
  nozzleReadingId: string;
  /**
   * @format double
   * @min 0
   * @max 999999.99
   */
  meterReading?: number;
  readingImage?: string | null;
  /** @format date-time */
  recordedAt?: string | null;
}

export interface NozzleUpdateDto {
  /** @format uuid */
  nozzleId: string;
  /**
   * @format int32
   * @min 1
   * @max 99
   */
  nozzleNumber?: number;
  /**
   * @minLength 0
   * @maxLength 50
   */
  fuelType?: string | null;
  /**
   * @minLength 0
   * @maxLength 20
   * @pattern ^(Active|Inactive|Maintenance)$
   */
  status?: string | null;
  /** @format date-time */
  lastCalibrationDate?: string | null;
}

export interface OperationalSummaryDTO {
  /** @format date-time */
  date?: string;
  /** @format int32 */
  totalTransactions?: number;
  /** @format int32 */
  activeDispensers?: number;
  /** @format int32 */
  inactiveDispensers?: number;
  /** @format int32 */
  shiftsCompleted?: number;
  /** @format int32 */
  employeesPresent?: number;
  /** @format int32 */
  employeesAbsent?: number;
  /** @format int32 */
  fuelDeliveries?: number;
  /** @format int32 */
  maintenanceActivities?: number;
  /** @format int32 */
  qualityChecksPerformed?: number;
  salesByShift?: Record<string, number>;
}

export interface PaymentMethodBreakdownDTO {
  paymentMethodAmounts?: Record<string, number>;
  paymentMethodPercentages?: Record<string, number>;
  topPaymentMethod?: string | null;
  /** @format double */
  topPaymentMethodPercentage?: number;
}

export interface PetrolPumpCreateDto {
  /** @minLength 1 */
  name: string;
  licenseNumber?: string | null;
  companyName?: string | null;
  /** @minLength 1 */
  contactNumber: string;
  SAPNo: string;
  /**
   * @format email
   * @minLength 1
   */
  email: string;
  /** @minLength 6 */
  password: string;
}

export interface PetrolPumpDto {
  /** @format uuid */
  petrolPumpId?: string;
  name?: string | null;
  /** @format uuid */
  addressId?: string | null;
  licenseNumber?: string | null;
  taxId?: string | null;
  /** @format time */
  openingTime?: string | null;
  /** @format time */
  closingTime?: string | null;
  isActive?: boolean;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string | null;
  companyName?: string | null;
  /** @format int32 */
  numberOfDispensers?: number | null;
  fuelTypesAvailable?: string | null;
  contactNumber?: string | null;
  email?: string | null;
  website?: string | null;
  gstNumber?: string | null;
  /** @format date */
  licenseExpiryDate?: string | null;
}

export interface PricingCreateDto {
  /** @format uuid */
  petrolPumpId?: string;
  /**
   * @minLength 0
   * @maxLength 50
   */
  fuelType: string;
  /**
   * @format double
   * @min 0.01
   * @max 999.99
   */
  pricePerLiter: number;
  /** @format date-time */
  effectiveDate: string;
  /** @format uuid */
  lastUpdatedBy?: string | null;
}

export interface PricingDto {
  /** @format uuid */
  pricingId?: string;
  /** @format uuid */
  petrolPumpId?: string;
  fuelType?: string | null;
  /** @format double */
  pricePerLiter?: number;
  /** @format date-time */
  effectiveDate?: string;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format uuid */
  lastUpdatedBy?: string | null;
}

export interface PricingHistoryDto {
  /** @format uuid */
  pricingId?: string;
  fuelType?: string | null;
  /** @format double */
  pricePerLiter?: number;
  /** @format date-time */
  effectiveDate?: string;
  /** @format date-time */
  createdAt?: string;
  updatedByName?: string | null;
}

export interface PricingUpdateDto {
  /** @format uuid */
  pricingId: string;
  /**
   * @minLength 0
   * @maxLength 50
   */
  fuelType: string;
  /**
   * @format double
   * @min 0.01
   * @max 999.99
   */
  pricePerLiter: number;
  /** @format date-time */
  effectiveDate: string;
  /** @format uuid */
  lastUpdatedBy?: string | null;
}

export interface ReconciliationRequestDto {
  /** @format uuid */
  tankId?: string;
  /** @format double */
  actualReading?: number;
  notes?: string | null;
}

export interface RevenueSummaryDTO {
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  /** @format double */
  totalRevenue?: number;
  /** @format double */
  fuelSalesRevenue?: number;
  revenueByFuelType?: Record<string, number>;
  revenueByShift?: Record<string, number>;
  /** @format double */
  averageDailyRevenue?: number;
  /** @format double */
  highestDailyRevenue?: number;
  /** @format date-time */
  highestRevenueDate?: string;
}

export interface ShiftCreateDTO {
  /** @format int32 */
  shiftNumber: number;
  /** @format date-span */
  startTime: string;
  /** @format date-span */
  endTime: string;
  /** @format int32 */
  shiftDuration: number;
}

export interface ShiftDTO {
  /** @format uuid */
  shiftId?: string;
  /** @format uuid */
  petrolPumpId?: string;
  petrolPumpName?: string | null;
  /** @format int32 */
  shiftNumber?: number;
  /** @format date-span */
  startTime?: string;
  /** @format date-span */
  endTime?: string;
  /** @format int32 */
  shiftDuration?: number;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

export interface ShiftDTOAPIServiceResponse {
  data?: ShiftDTO;
  success?: boolean;
  message?: string | null;
  validationErrors?: string | null;
}

export interface ShiftDTOListAPIServiceResponse {
  data?: ShiftDTO[] | null;
  success?: boolean;
  message?: string | null;
  validationErrors?: string | null;
}

export interface ShiftMetricDTO {
  /** @format int32 */
  shiftNumber?: number;
  shiftName?: string | null;
  /** @format double */
  averageDailySales?: number;
  /** @format double */
  totalSalesVolume?: number;
  /** @format double */
  totalRevenue?: number;
  /** @format int32 */
  transactionCount?: number;
  /** @format double */
  averageTransactionValue?: number;
}

export interface ShiftPerformanceDTO {
  shiftMetrics?: ShiftMetricDTO[] | null;
  topPerformingShift?: string | null;
  /** @format double */
  topPerformingShiftVolume?: number;
}

export interface ShiftUpdateDTO {
  /** @format date-span */
  startTime?: string;
  /** @format date-span */
  endTime?: string;
  /** @format int32 */
  shiftDuration?: number;
}

export interface StockThresholdConfigDto {
  /** @format uuid */
  fuelTankId?: string;
  /** @format double */
  thresholdPercentage?: number;
  /** @format double */
  absoluteThreshold?: number;
  usePercentage?: boolean;
}

export interface StringAPIServiceResponse {
  data?: string | null;
  success?: boolean;
  message?: string | null;
  validationErrors?: string | null;
}

export interface SupplierCreateDto {
  /**
   * @minLength 0
   * @maxLength 255
   */
  supplierName: string;
  /**
   * @minLength 0
   * @maxLength 100
   */
  contactPerson: string;
  /**
   * @minLength 0
   * @maxLength 15
   * @pattern ^[0-9+\-\s()]*$
   */
  phoneNumber: string;
  /**
   * @format email
   * @minLength 0
   * @maxLength 255
   */
  email?: string | null;
  /**
   * @minLength 0
   * @maxLength 255
   */
  address?: string | null;
  /**
   * @minLength 0
   * @maxLength 100
   */
  city?: string | null;
  /**
   * @minLength 0
   * @maxLength 100
   */
  state?: string | null;
  /**
   * @minLength 0
   * @maxLength 10
   */
  zipCode?: string | null;
  /**
   * @minLength 0
   * @maxLength 50
   * @pattern ^[A-Z0-9]*$
   */
  gstNumber?: string | null;
  /** @format uuid */
  petrolPumpId?: string | null;
  isActive?: boolean;
}

export interface SupplierDto {
  /** @format uuid */
  supplierDetailId?: string;
  supplierName?: string | null;
  contactPerson?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  zipCode?: string | null;
  gstNumber?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format uuid */
  petrolPumpId?: string | null;
  isActive?: boolean | null;
}

export interface SupplierUpdateDto {
  /** @format uuid */
  supplierDetailId: string;
  /**
   * @minLength 0
   * @maxLength 255
   */
  supplierName: string;
  /**
   * @minLength 0
   * @maxLength 100
   */
  contactPerson: string;
  /**
   * @minLength 0
   * @maxLength 15
   * @pattern ^[0-9+\-\s()]*$
   */
  phoneNumber: string;
  /**
   * @format email
   * @minLength 0
   * @maxLength 255
   */
  email?: string | null;
  /**
   * @minLength 0
   * @maxLength 255
   */
  address?: string | null;
  /**
   * @minLength 0
   * @maxLength 100
   */
  city?: string | null;
  /**
   * @minLength 0
   * @maxLength 100
   */
  state?: string | null;
  /**
   * @minLength 0
   * @maxLength 10
   */
  zipCode?: string | null;
  /**
   * @minLength 0
   * @maxLength 50
   * @pattern ^[A-Z0-9]*$
   */
  gstNumber?: string | null;
  isActive?: boolean;
}

export interface TopCustomerDTO {
  /** @format uuid */
  customerId?: string;
  customerName?: string | null;
  customerType?: string | null;
  /** @format double */
  totalPurchaseVolume?: number;
  /** @format double */
  totalSpend?: number;
  /** @format int32 */
  transactionCount?: number;
  /** @format double */
  averageTransactionValue?: number;
  preferredFuelType?: string | null;
  preferredPaymentMethod?: string | null;
  /** @format int32 */
  loyaltyPoints?: number;
}

export interface ValidateReadingRequestDto {
  /** @format uuid */
  nozzleId?: string;
  readingType?: string | null;
  /** @format double */
  meterReading?: number;
  /** @format uuid */
  shiftId?: string;
}

export interface WeatherForecast {
  /** @format date */
  date?: string;
  /** @format int32 */
  temperatureC?: number;
  /** @format int32 */
  temperatureF?: number;
  summary?: string | null;
}
