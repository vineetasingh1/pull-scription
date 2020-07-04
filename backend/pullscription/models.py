# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models

class Comics(models.Model):
    diamd_no = models.CharField(db_column='DIAMD_NO', max_length=10, blank=True, null=False, primary_key = True)  # Field name made lowercase.
    stock_no = models.CharField(db_column='STOCK_NO', max_length=9, blank=True, null=True)  # Field name made lowercase.
    parent_item_no_alt = models.CharField(db_column='PARENT_ITEM_NO_ALT', max_length=9, blank=True, null=True)  # Field name made lowercase.
    bounce_use_item = models.CharField(db_column='BOUNCE_USE_ITEM', max_length=20, blank=True, null=True)  # Field name made lowercase.
    full_title = models.CharField(db_column='FULL_TITLE', max_length=255, blank=True, null=True)  # Field name made lowercase.
    main_desc = models.CharField(db_column='MAIN_DESC', max_length=255, blank=True, null=True)  # Field name made lowercase.
    variant_desc = models.CharField(db_column='VARIANT_DESC', max_length=255, blank=True, null=True)  # Field name made lowercase.
    series_code = models.IntegerField(db_column='SERIES_CODE', blank=True, null=True)  # Field name made lowercase.
    issue_no = models.IntegerField(db_column='ISSUE_NO', blank=True, null=True)  # Field name made lowercase.
    issue_seq_no = models.IntegerField(db_column='ISSUE_SEQ_NO', blank=True, null=True)  # Field name made lowercase.
    volume_tag = models.IntegerField(db_column='VOLUME_TAG', blank=True, null=True)  # Field name made lowercase.
    max_issue = models.CharField(db_column='MAX_ISSUE', max_length=255, blank=True, null=True)  # Field name made lowercase.
    price = models.DecimalField(db_column='PRICE', max_digits=65, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    publisher = models.CharField(db_column='PUBLISHER', max_length=255, blank=True, null=True)  # Field name made lowercase.
    upc_no = models.CharField(db_column='UPC_NO', max_length=255, blank=True, null=True)  # Field name made lowercase.
    short_isbn_no = models.CharField(db_column='SHORT_ISBN_NO', max_length=255, blank=True, null=True)  # Field name made lowercase.
    ean_no = models.CharField(db_column='EAN_NO', max_length=255, blank=True, null=True)  # Field name made lowercase.
    cards_per_pack = models.IntegerField(db_column='CARDS_PER_PACK', blank=True, null=True)  # Field name made lowercase.
    pack_per_box = models.IntegerField(db_column='PACK_PER_BOX', blank=True, null=True)  # Field name made lowercase.
    box_per_case = models.IntegerField(db_column='BOX_PER_CASE', blank=True, null=True)  # Field name made lowercase.
    discount_code = models.CharField(db_column='DISCOUNT_CODE', max_length=3, blank=True, null=True)  # Field name made lowercase.
    increment = models.IntegerField(db_column='INCREMENT', blank=True, null=True)  # Field name made lowercase.
    prnt_date = models.DateField(db_column='PRNT_DATE', blank=True, null=True)  # Field name made lowercase.
    foc_vendor = models.IntegerField(db_column='FOC_VENDOR', blank=True, null=True)  # Field name made lowercase.
    ship_date = models.DateField(db_column='SHIP_DATE', blank=True, null=True)  # Field name made lowercase.
    srp = models.DecimalField(db_column='SRP', max_digits=65, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    category = models.IntegerField(db_column='CATEGORY', blank=True, null=True)  # Field name made lowercase.
    genre = models.CharField(db_column='GENRE', max_length=255, blank=True, null=True)  # Field name made lowercase.
    brand_code = models.CharField(db_column='BRAND_CODE', max_length=255, blank=True, null=True)  # Field name made lowercase.
    mature = models.IntegerField(db_column='MATURE', blank=True, null=True)  # Field name made lowercase.
    adult = models.IntegerField(db_column='ADULT', blank=True, null=True)  # Field name made lowercase.
    oa = models.IntegerField(db_column='OA', blank=True, null=True)  # Field name made lowercase.
    caut1 = models.IntegerField(db_column='CAUT1', blank=True, null=True)  # Field name made lowercase.
    caut2 = models.IntegerField(db_column='CAUT2', blank=True, null=True)  # Field name made lowercase.
    caut3 = models.IntegerField(db_column='CAUT3', blank=True, null=True)  # Field name made lowercase.
    resol = models.IntegerField(db_column='RESOL', blank=True, null=True)  # Field name made lowercase.
    note_price = models.IntegerField(db_column='NOTE_PRICE', blank=True, null=True)  # Field name made lowercase.
    order_form_notes = models.CharField(db_column='ORDER_FORM_NOTES', max_length=255, blank=True, null=True)  # Field name made lowercase.
    page = models.IntegerField(db_column='PAGE', blank=True, null=True)  # Field name made lowercase.
    writer = models.CharField(db_column='WRITER', max_length=255, blank=True, null=True)  # Field name made lowercase.
    artist = models.CharField(db_column='ARTIST', max_length=255, blank=True, null=True)  # Field name made lowercase.
    cover_artist = models.CharField(db_column='COVER_ARTIST', max_length=255, blank=True, null=True)  # Field name made lowercase.
    colorist = models.CharField(db_column='COLORIST', max_length=255, blank=True, null=True)  # Field name made lowercase.
    alliance_sku = models.CharField(db_column='ALLIANCE_SKU', max_length=255, blank=True, null=True)  # Field name made lowercase.
    foc_date = models.DateField(db_column='FOC_DATE', blank=True, null=True)  # Field name made lowercase.
    offered_date = models.DateField(db_column='OFFERED_DATE', blank=True, null=True)  # Field name made lowercase.
    number_of_pages = models.IntegerField(db_column='NUMBER_OF_PAGES', blank=True, null=True)  # Field name made lowercase.
    unit_weight = models.DecimalField(db_column='UNIT_WEIGHT', max_digits=50, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    unit_length = models.DecimalField(db_column='UNIT_LENGTH', max_digits=50, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    unit_width = models.DecimalField(db_column='UNIT_WIDTH', max_digits=50, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    unit_height = models.DecimalField(db_column='UNIT_HEIGHT', max_digits=50, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    case_weight = models.DecimalField(db_column='CASE_WEIGHT', max_digits=50, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    case_length = models.DecimalField(db_column='CASE_LENGTH', max_digits=50, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    case_width = models.DecimalField(db_column='CASE_WIDTH', max_digits=50, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    case_height = models.DecimalField(db_column='CASE_HEIGHT', max_digits=50, decimal_places=0, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'comics'

class User(models.Model):
    username = models.CharField(max_length=255, blank=True, null=True)
    password = models.CharField(max_length=255, blank=True, null=True)
    email = models.CharField(max_length=255, blank=True, null=True)
    pull_list = models.CharField(max_length=9, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'user'
